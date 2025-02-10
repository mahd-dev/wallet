import {
  IconArrowsMaximize,
  IconArrowsMinimize,
  IconCheck,
  IconCopy,
  IconCopyCheck,
  IconHandOff,
  IconHandStop,
  IconMicrophone,
  IconMicrophoneOff,
  IconPhoneEnd,
  IconScreenShare,
  IconScreenShareOff,
  IconSelector,
  IconUserPlus,
  IconVideo,
  IconVideoOff,
  IconVolume,
} from "@tabler/icons-react";

import {
  Menu,
  MenuButton,
  MenuHeading,
  MenuItem,
  MenuItems,
  MenuSection,
  MenuSeparator,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import m from "lang";
import { useEffect, useRef, useState } from "react";
import { useCLipboard } from "~/hooks/useClipboard";
import useMicVolume from "~/hooks/useMicVolume";
import { useDivSize } from "~/hooks/useWindowSize";
import {
  camDeviceAtom,
  dirAtom,
  micDeviceAtom,
  outDeviceAtom,
  rasieHandAtom,
  roomAtom,
  scrShareStateAtom,
} from "~/store/store";

const audioRequestConfig = {
  audio: {
    advanced: [
      {
        echoCancellation: { ideal: true },
        noiseSuppression: { ideal: true },
      },
    ],
  },
};

export const Controls = () => {
  const [roomData] = useAtom(roomAtom);

  const [micDevice, setMicDevice] = useAtom(micDeviceAtom);
  const [outDevice, setOutDevice] = useAtom(outDeviceAtom);
  const [camDevice, setCamDevice] = useAtom(camDeviceAtom);
  const [scrShareState, setScrShareState] = useAtom(scrShareStateAtom);
  const [raiseHand, setRaiseHand] = useAtom(rasieHandAtom);

  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  const [dir] = useAtom(dirAtom);

  const wSize = useDivSize();

  const camStreamRef = useRef<MediaStream>();

  useHydrateAtoms([[camDeviceAtom, { ...camDevice, stream: camStreamRef }]]);

  useEffect(() => {
    if (!navigator.mediaDevices) return;

    navigator.mediaDevices.ondevicechange = () => {
      navigator.mediaDevices.enumerateDevices().then(setDevices);
    };
    (async () => {
      if (micDevice.isOn) {
        await navigator.mediaDevices.getUserMedia(audioRequestConfig);
      }
      if (camDevice.isOn) {
        camStreamRef.current?.getTracks().map((t) => t.stop());
        await navigator.mediaDevices
          .getUserMedia({
            video: {
              deviceId: camDevice.deviceId,
              facingMode: camDevice.facingMode,
            },
          })
          .then((stream) => {
            camStreamRef.current = stream;
            setCamDevice({ ...camDevice, isOn: true, stream: camStreamRef });
          });
      }
      navigator.mediaDevices.enumerateDevices().then(setDevices);
    })();

    return () => {
      navigator.mediaDevices.ondevicechange = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camDevice.facingMode, camDevice.deviceId, micDevice.deviceId]);

  const micRef = useRef<HTMLSpanElement>(null);
  useMicVolume(micDevice.deviceId, micRef);

  const [cb, setCB] = useCLipboard();

  const inviteBtnRef = useRef<HTMLButtonElement>(null);
  if (typeof window !== "undefined") (window as any).inviteBtn = inviteBtnRef;

  const {
    mic: micCount,
    out: outCount,
    cam: camCount,
  } = devices.reduce<{
    mic: number;
    out: number;
    cam: number;
  }>(
    (prev, d) => ({
      mic: prev.mic + (d.kind === "audioinput" && d.deviceId ? 1 : 0),
      out: prev.out + (d.kind === "audiooutput" && d.deviceId ? 1 : 0),
      cam: prev.cam + (d.kind === "videoinput" && d.deviceId ? 1 : 0),
    }),
    { mic: 0, out: 0, cam: 0 },
  );

  return (
    <LayoutGroup>
      <Popover className="relative">
        <AnimatePresence>
          <PopoverButton
            as={motion.button}
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={inviteBtnRef}
            className="relative grid size-10 place-items-center rounded-full lg:size-14"
            onClick={async () =>
              navigator.canShare &&
              navigator.canShare() &&
              navigator.share({
                url: location.href,
                title: m.shareMeetTitle(),
                text: m.shareMeetText(),
              })
            }
            title={m.invitePeopleTooltip()}
          >
            <IconUserPlus className="absolute z-10 size-1/2 text-softblue-100" />
            <span
              className={`relative inline-flex size-full rounded-full bg-softblue-400 transition-colors`}
            />
          </PopoverButton>
        </AnimatePresence>

        {(typeof window === "undefined" ||
          !navigator.canShare ||
          !navigator.canShare()) && (
          <PopoverPanel
            anchor={{
              to: wSize[0] < 1024 ? "top" : dir === "rtl" ? "left" : "right",
              gap: ".5rem",
            }}
            transition
            className={`${wSize[0] < 1024 ? "origin-bottom" : dir === "rtl" ? "origin-right" : "origin-left"} z-[100] mx-4 mb-2 flex w-[calc(100%-2rem)] max-w-xs flex-col gap-4 rounded-xl bg-softgray-100/50 p-5 text-softgray-900 shadow-lg backdrop-blur-md transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 lg:w-auto lg:rounded-3xl`}
          >
            <span className="w-full">{m.inviteDialogMsg()}</span>
            <div className="flex w-full">
              <div className="grow">
                <input
                  className="w-full rounded-s-full bg-softgray-50/30 p-3 focus:outline-none"
                  readOnly
                  value={location.href}
                  onFocus={(e) => {
                    e.currentTarget.selectionStart = 0;
                    e.currentTarget.selectionEnd = location.href.length;
                  }}
                  onSelect={(e) => {
                    e.currentTarget.selectionStart = 0;
                    e.currentTarget.selectionEnd = location.href.length;
                  }}
                  onClick={(e) => {
                    e.currentTarget.selectionStart = 0;
                    e.currentTarget.selectionEnd = location.href.length;
                  }}
                />
              </div>
              <button
                className="flex flex-nowrap items-center gap-1 rounded-e-full bg-softgray-50/30 p-3 focus:outline-none"
                onClick={() => {
                  setCB(location.href);
                }}
              >
                {m.copy()}
                {cb === location.href ? <IconCopyCheck /> : <IconCopy />}
              </button>
            </div>
          </PopoverPanel>
        )}
      </Popover>
      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex h-10 flex-row rounded-full bg-softgray-100 lg:h-auto lg:w-14 lg:flex-col"
      >
        <button
          className="relative grid aspect-square size-10 place-items-center lg:size-14"
          onClick={async () => {
            await navigator.mediaDevices
              .getUserMedia(audioRequestConfig)
              .then(() => navigator.mediaDevices.enumerateDevices())
              .then(setDevices);
            setMicDevice({ ...micDevice, isOn: !micDevice.isOn });
          }}
          title={m.microphone()}
        >
          {micDevice.isOn && (
            <span
              ref={micRef}
              className="pointer-events-none absolute inline-flex size-full rounded-full bg-softgreen-300/30 transition-transform"
            />
          )}
          {micDevice.isOn ? (
            <IconMicrophone className="absolute z-10 size-1/2 text-softgreen-100 rtl:-scale-x-100" />
          ) : (
            <IconMicrophoneOff className="absolute z-10 size-1/2 text-softred-100 rtl:-scale-x-100" />
          )}
          <span
            className={`relative inline-flex size-full rounded-full transition-colors ${
              micDevice.isOn ? "bg-softgreen-300" : "bg-softred-400"
            }`}
          />
        </button>
        <Menu>
          <MenuButton
            className={`m-auto grid place-items-center overflow-hidden transition-all ${
              micCount > 1 || outCount > 1 ? "size-8 p-1" : "size-0 p-0"
            }`}
            title={m.SoundDevicesTooltip()}
          >
            <IconSelector className="text-softgray-800 lg:rotate-90" />
          </MenuButton>

          <MenuItems
            onFocus={() =>
              navigator.mediaDevices
                .getUserMedia(audioRequestConfig)
                .then(() => navigator.mediaDevices.enumerateDevices())
                .then(setDevices)
            }
            transition
            anchor={{
              to: wSize[0] < 1024 ? "top" : dir === "rtl" ? "left" : "right",
              gap: ".5rem",
            }}
            className={`${wSize[0] < 1024 ? "origin-bottom" : dir === "rtl" ? "origin-right" : "origin-left"} z-[100] mx-4 mb-2 rounded-xl bg-softgray-100/50 p-3 text-softgray-900 shadow-lg backdrop-blur-md transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 lg:rounded-3xl`}
          >
            {micCount > 1 && (
              <MenuSection>
                <MenuHeading className="flex items-center gap-2 pb-4 text-sm opacity-70">
                  <IconMicrophone />
                  <span>{m.microphone()}</span>
                </MenuHeading>
                {devices
                  .filter((d) => d.kind === "audioinput")
                  .map((device) => (
                    <MenuItem key={device.deviceId}>
                      <button
                        className="group flex w-full items-center gap-2 rounded-xl px-3 py-1.5 data-[focus]:bg-softgray-300/30"
                        onClick={() =>
                          setMicDevice({
                            ...micDevice,
                            deviceId: device.deviceId,
                          })
                        }
                      >
                        <div className="size-6 shrink-0">
                          {micDevice.deviceId === device.deviceId && (
                            <IconCheck className="text-softgray-800" />
                          )}
                        </div>
                        <span className="grow text-start">{device.label}</span>
                      </button>
                    </MenuItem>
                  ))}
              </MenuSection>
            )}
            {micCount > 1 && outCount > 1 && (
              <MenuSeparator className="my-2 h-px bg-softgray-300/30" />
            )}
            {outCount > 1 && (
              <MenuSection>
                <MenuHeading className="flex items-center gap-2 py-4 text-sm opacity-70">
                  <IconVolume className="rtl:-scale-100" />
                  <span>{m.speaker()}</span>
                </MenuHeading>
                {devices
                  .filter((d) => d.kind === "audiooutput")
                  .map((device) => (
                    <MenuItem key={device.deviceId}>
                      <button
                        className="group flex w-full items-center gap-2 rounded-xl px-3 py-1.5 data-[focus]:bg-softgray-300/30"
                        onClick={() =>
                          setOutDevice({
                            ...outDevice,
                            deviceId: device.deviceId,
                          })
                        }
                      >
                        <div className="size-6 shrink-0">
                          {outDevice.deviceId === device.deviceId && (
                            <IconCheck className="text-softgray-800" />
                          )}
                        </div>
                        <span className="grow text-start">{device.label}</span>
                      </button>
                    </MenuItem>
                  ))}
              </MenuSection>
            )}
          </MenuItems>
        </Menu>
      </motion.div>

      <motion.div
        transition={{ delay: 0.2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative flex h-10 flex-row rounded-full bg-softgray-100 lg:h-auto lg:w-14 lg:flex-col"
      >
        <button
          className="relative grid aspect-square size-10 place-items-center lg:size-14"
          onClick={async () => {
            if (camDevice.isOn) {
              camDevice.stream.current?.getTracks().forEach((t) => t.stop());
            } else {
              const stream = await navigator.mediaDevices.getUserMedia({
                video: { deviceId: camDevice.deviceId },
              });
              navigator.mediaDevices.enumerateDevices().then(setDevices);
              camStreamRef.current = stream;
            }
            setCamDevice({
              ...camDevice,
              isOn: !camDevice.isOn,
              stream: camStreamRef,
            });
          }}
          title={m.Camera()}
        >
          {camDevice.isOn ? (
            <IconVideo className="absolute z-10 size-1/2 text-softgreen-100 rtl:-scale-x-100" />
          ) : (
            <IconVideoOff className="absolute z-10 size-1/2 text-softred-100 rtl:-scale-x-100" />
          )}
          <span
            className={`relative inline-flex size-full rounded-full transition-colors ${
              camDevice.isOn ? "bg-softgreen-300" : "bg-softred-400"
            }`}
          />
        </button>
        <Menu>
          <MenuButton
            className={`m-auto grid place-items-center overflow-hidden transition-all ${
              camCount > 1 && roomData && roomData !== "prejoin"
                ? "size-8 p-1"
                : "size-0 p-0"
            }`}
            title={m.SoundDevicesTooltip()}
          >
            <IconSelector className="text-softgray-800 lg:rotate-90" />
          </MenuButton>

          <MenuItems
            onFocus={() =>
              navigator.mediaDevices
                .getUserMedia({
                  video: {
                    facingMode: camDevice.facingMode,
                  },
                })
                .then(() => navigator.mediaDevices.enumerateDevices())
                .then(setDevices)
            }
            transition
            anchor={{
              to: wSize[0] < 1024 ? "top" : dir === "rtl" ? "left" : "right",
              gap: ".5rem",
            }}
            className={`${wSize[0] < 1024 ? "origin-bottom" : dir === "rtl" ? "origin-right" : "origin-left"} z-[100] mx-4 mb-2 rounded-xl bg-softgray-100/50 p-3 text-softgray-900 shadow-lg backdrop-blur-md transition duration-100 ease-out focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 lg:rounded-3xl`}
          >
            <MenuSection>
              <MenuHeading className="mb-4 flex items-center gap-2 text-sm opacity-70">
                <IconVideo />
                <span>{m.Camera()}</span>
              </MenuHeading>
              {devices
                .filter((d) => d.kind === "videoinput")
                .map((device) => (
                  <MenuItem key={device.deviceId}>
                    <button
                      className="group flex w-full items-center gap-2 rounded-xl px-3 py-1.5 data-[focus]:bg-softgray-300/30"
                      onClick={() =>
                        setCamDevice({
                          ...camDevice,
                          deviceId: device.deviceId,
                        })
                      }
                    >
                      <div className="size-6 shrink-0">
                        {camDevice.deviceId === device.deviceId && (
                          <IconCheck className="text-softgray-800" />
                        )}
                      </div>
                      <span className="grow text-start">{device.label}</span>
                    </button>
                  </MenuItem>
                ))}
            </MenuSection>
            {/* <MenuSeparator className="my-2 h-px bg-softgray-300/30" />
              <MenuItem>
                <button
                  className="mx-auto flex flex-nowrap content-center items-center gap-2 rounded-full bg-softgray-200/50 px-4 py-3"
                  onClick={() =>
                    setCamDevice({
                      ...camDevice,
                      facingMode:
                        camDevice.facingMode === "user" ? "environment" : "user",
                    })
                  }
                >
                  <IconCameraRotate />
                  {m.rotateCamera()}
                </button>
              </MenuItem> */}
          </MenuItems>
        </Menu>
      </motion.div>
      <AnimatePresence>
        {roomData &&
          roomData !== "prejoin" &&
          typeof navigator?.mediaDevices?.getDisplayMedia === "function" && (
            <motion.button
              transition={{ delay: 0.2 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative grid size-10 place-items-center rounded-full lg:size-14"
              onClick={() =>
                setScrShareState(
                  scrShareState === "sharing" ? null : "requested",
                )
              }
              title={m.Share_Screen()}
            >
              {scrShareState === "sharing" ? (
                <IconScreenShareOff className="absolute z-10 size-1/2 text-softblue-100" />
              ) : (
                <IconScreenShare className="absolute z-10 size-1/2 text-softgray-800" />
              )}
              <span
                className={`relative inline-flex size-full rounded-full transition-colors ${
                  scrShareState === "sharing"
                    ? "bg-softblue-400"
                    : "bg-softgray-100"
                }`}
              />
            </motion.button>
          )}
      </AnimatePresence>
      <AnimatePresence>
        {roomData && roomData !== "prejoin" ? (
          <motion.button
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative grid size-10 h-10 place-items-center rounded-full lg:size-14"
            onClick={() => setRaiseHand(!raiseHand)}
            title={m.raiseHand()}
          >
            {raiseHand && (
              <span
                className={`pointer-events-none absolute inline-flex size-full animate-ping rounded-full bg-yellow-300 opacity-75 transition-opacity`}
              />
            )}
            {raiseHand ? (
              <IconHandStop className="absolute z-10 size-1/2 text-softyellow-900" />
            ) : (
              <IconHandOff className="absolute z-10 size-1/2 text-softgray-800" />
            )}
            <span
              className={`relative inline-flex size-full rounded-full transition-colors ${
                raiseHand ? "bg-softyellow-200" : "bg-softgray-100"
              }`}
            />
          </motion.button>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {roomData && roomData !== "prejoin" ? (
          <motion.button
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative grid size-10 place-items-center rounded-full lg:size-14"
            onClick={() =>
              !document.fullscreenElement
                ? document.getElementById("meetContainer")?.requestFullscreen({
                    navigationUI: "hide",
                  })
                : document.exitFullscreen
                  ? document.exitFullscreen()
                  : undefined
            }
            title={m.fullScreen()}
          >
            {typeof document !== "undefined" && !document.fullscreenElement ? (
              <IconArrowsMaximize className="absolute z-10 size-1/2 text-softgray-800" />
            ) : (
              <IconArrowsMinimize className="absolute z-10 size-1/2 text-softgray-800" />
            )}
            <span
              className={`relative inline-flex size-full rounded-full bg-softgray-100`}
            />
          </motion.button>
        ) : null}
      </AnimatePresence>
      <AnimatePresence>
        {roomData && roomData !== "prejoin" ? (
          <motion.a
            href={`/`}
            transition={{ delay: 0.2 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative grid h-10 w-14 place-items-center rounded-full lg:size-14"
            title={m.leaveMeeting()}
          >
            <IconPhoneEnd className="absolute z-10 size-1/2 text-softred-200" />
            <span
              className={`relative inline-flex size-full rounded-full bg-softred-500`}
            />
          </motion.a>
        ) : null}
      </AnimatePresence>
    </LayoutGroup>
  );
};
