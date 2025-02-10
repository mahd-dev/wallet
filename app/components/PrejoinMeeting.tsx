/* eslint-disable jsx-a11y/media-has-caption */
import { Button, Input } from "@headlessui/react";
import { useSearchParams } from "@remix-run/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { cubicBezier, motion } from "framer-motion";
import { useAtom } from "jotai";
import m from "lang";
import { nanoid } from "nanoid";
import { useEffect, useMemo, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDivSize } from "~/hooks/useWindowSize";
import {
  camDeviceAtom,
  dirAtom,
  meetGridLayoutAtom,
  micDeviceAtom,
  prejoinNameAtom,
  roomAtom,
} from "~/store/store";
import { action as meetAuthAction } from "../routes/api.meet.auth";
import { ParticipantName } from "./participantName";

// const wlcm = Math.round(Math.random() * 2);

export function PrejoinMeeting(props: {
  mid: string;
  key?: string;
  secret?: string;
}) {
  const [roomData, setRoomData] = useAtom(roomAtom);
  useEffect(() => {
    setRoomData("prejoin");
  }, [setRoomData]);

  const [dir] = useAtom(dirAtom);

  const [searchParams] = useSearchParams();

  const [prejoinName, setPrejoinName] = useAtom(prejoinNameAtom);
  const [micDevice] = useAtom(micDeviceAtom);
  const [camDevice] = useAtom(camDeviceAtom);
  const [, setMeetGridLayout] = useAtom(meetGridLayoutAtom);

  const [wWidth, , wDir] = useDivSize();

  useEffect(() => {
    setMeetGridLayout({ cs: wDir === "v" ? 1 : 12, rs: 12 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wDir]);
  const camVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!camVideo.current) return;
    camVideo.current.srcObject =
      camDevice.isOn && camDevice.stream.current
        ? camDevice.stream.current
        : null;
  }, [camDevice]);

  interface IFormData {
    name: string;
  }
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: {
      isLoading,
      errors: { name: nameError },
    },
  } = useForm<IFormData>({ defaultValues: { name: prejoinName } });
  const onSubmit: SubmitHandler<IFormData> = async (data) => {
    await fetch(`/api/meet/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        room: props.mid,
        userId: nanoid(),
        userName: data.name,
        key: props.key,
        secret: props.secret,
        hidden: searchParams.get("hidden"),
      }),
    })
      .then((r) => r.json() as ReturnType<typeof meetAuthAction>)
      .then((r) => {
        camDevice.stream.current?.getTracks().map((t) => t.stop());
        setRoomData({ ...r, rtcUrl: searchParams.get("rtc") || r.rtcUrl });
        setPrejoinName(data.name);
      });
  };
  useEffect(() => {
    setValue("name", prejoinName);
  }, [prejoinName, setValue]);

  const values = watch();
  const { initials, hue } = useMemo(() => {
    const words = (values.name || "").trim().split(/\s+/);
    const initials =
      words.length > 1
        ? words
            .filter((_w, index, arr) => index === 0 || index === arr.length - 1)
            .map((word) => word.charAt(0).toUpperCase())
        : (words.at(0) || "  ").slice(0, 2).toUpperCase().split("");

    return {
      initials,
      hue:
        (values.name || "")
          .split("")
          .reduce(
            (hash, char) => char.charCodeAt(0) + ((hash << 5) - hash),
            0,
          ) % 360,
    };
  }, [values.name]);

  return (
    <>
      <motion.div
        id="me-camera"
        layoutId="me-camera"
        className={`relative size-full overflow-hidden rounded-3xl transition-all`}
        transition={{ ease: cubicBezier(0, 1, 0.65, 0.95) }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          gridColumn:
            wDir === "h"
              ? wWidth >= 1024
                ? `${5} / ${9}`
                : `${4} / ${10}`
              : `${1} / ${2}`,
          gridRow:
            wDir === "h"
              ? wWidth >= 1024
                ? `${4} / ${9}`
                : `${1} / ${10}`
              : `${3} / ${9}`,
          backgroundColor: values.name
            ? `hsla(${hue}, 70%, 20%, 0.07)`
            : `rgba(0, 0, 0, 0.05)`,
        }}
      >
        {camDevice.isOn ? (
          <>
            <video
              ref={camVideo}
              autoPlay
              className="size-full -scale-x-100 object-cover"
            />
          </>
        ) : (
          <div className="pointer-events-none absolute inset-0 grid place-content-center">
            <span
              className="z-10 grid size-24 place-content-center rounded-full transition-colors duration-500"
              style={{
                backgroundColor: values.name
                  ? `hsla(${hue}, 50%, 80%, 1)`
                  : "rgba(0, 0, 0, 0.1)",
              }}
            >
              <span
                className="flex flex-row pt-3 text-2xl"
                style={{
                  color: `hsla(${hue}, 50%, 30%, 1)`,
                }}
              >
                {initials.map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </span>
            </span>
          </div>
        )}
        <ParticipantName
          name={values.name}
          isSpreaking={false}
          micOn={micDevice.isOn}
        />
      </motion.div>
      <div
        className="flex flex-col"
        style={{
          gridColumn:
            wDir === "h"
              ? wWidth >= 1024
                ? `${5} / ${9}`
                : `${4} / ${10}`
              : `${1} / ${2}`,
          gridRow:
            wDir === "h"
              ? wWidth >= 1024
                ? `${9} / ${10}`
                : `${10} / ${11}`
              : `${9} / ${10}`,
        }}
      >
        <form
          className="mt-12 flex flex-row md:mt-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={true}
            {...register("name", { required: true })}
            autoComplete="name"
            placeholder={m.meet_prejoin_name_placeholder()}
            className={`min-w-0 grow rounded-s-full border-none p-3 ps-6 text-softgreen-900 transition-colors focus:outline-none ${
              dir === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r"
            } ${
              nameError
                ? "from-softred-500/50 to-softred-500/10 placeholder:text-softred-700"
                : "from-black/5 to-softgreen-500/20"
            }`}
          />
          <Button
            type="submit"
            className={`flex flex-row place-items-center gap-2 whitespace-nowrap rounded-e-full p-3 text-softgreen-800 transition-all focus:outline-none disabled:text-softred-200 ${
              dir === "rtl" ? "bg-gradient-to-l" : "bg-gradient-to-r"
            } ${
              nameError
                ? "from-softred-500/10 to-softred-500/10"
                : "from-softgreen-500/20 via-softgreen-500/30 to-softgreen-500/50 hover:from-softgreen-500/20 hover:via-softgreen-500/40 hover:to-softgreen-500/80 focus:from-softgreen-500/20 focus:via-softgreen-500/40 focus:to-softgreen-500/80"
            } `}
            disabled={
              !!nameError || isLoading || (!!roomData && roomData !== "prejoin")
            }
          >
            <span>{m.meet_prejoin_joinbtn_title()}</span>
            {dir === "ltr" ? <IconArrowRight /> : <IconArrowLeft />}
          </Button>
        </form>
      </div>
    </>
  );
}
