import {
  IconAntennaBars2,
  IconAntennaBars4,
  IconAntennaBars5,
  IconAntennaBarsOff,
  IconHandStop,
  IconMicrophoneOff,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { ConnectionQuality } from "livekit-client";
// import { motion } from "framer-motion";
import { useMemo } from "react";
import { dirAtom } from "~/store/store";
import { strToHueColor } from "~/utils/color";

export const ParticipantName = (props: {
  name: string;
  isSpreaking?: boolean;
  micOn?: boolean;
  HandRaised?: boolean;
  connQuality?: ConnectionQuality;
}) => {
  const [dir] = useAtom(dirAtom);

  const { initials, hue } = useMemo(() => {
    const words = (props.name || "").trim().split(/\s+/);
    const initials =
      words.length > 1
        ? words
            .filter((_w, index, arr) => index === 0 || index === arr.length - 1)
            .map((word) => word.charAt(0).toUpperCase())
        : (words.at(0) || "  ").slice(0, 2).toUpperCase().split("");

    return {
      initials,
      hue: strToHueColor(props.name || ""),
    };
  }, [props.name]);

  return (
    <div
      className="absolute start-2 top-2 flex max-w-[calc(100%-1rem)] cursor-default flex-row place-content-stretch overflow-hidden rounded-full pe-1 backdrop-blur-sm transition-all duration-500"
      style={{
        background: props.name
          ? `linear-gradient(to ${
              dir === "ltr" ? "right" : "left"
            }, hsla(${hue}, 70%, 80%, 0.8) 0%, hsla(${hue}, 60%, 80%, 0.7) 20%, hsla(${hue}, 50%, 85%, 0.6) 30%, hsla(${hue}, 50%, 90%, 0.6) 100%)`
          : "rgba(0, 0, 0, 0.1)",
      }}
    >
      <span
        className={`pointer-events-none absolute -start-3 inline-flex size-9 animate-ping rounded-full transition-opacity ${
          props.isSpreaking ? "opacity-75" : "opacity-0"
        }`}
        style={{
          backgroundColor: `hsl(${hue}, 90%, 60%)`,
        }}
      />
      <div className="grid size-9 min-w-9 place-content-center rounded-s-full">
        <span className="flex flex-row pt-1 text-sm">
          {initials.map((c, i) => (
            <span key={i}>{c}</span>
          ))}
        </span>
      </div>
      <div className="me-2 shrink place-content-center self-stretch pt-1">
        <span className="max-w-full truncate ps-2">{props.name}</span>
      </div>
      <div
        className={`relative my-2 grid place-content-center transition-all ${
          !props.HandRaised
            ? "me-0 size-0 translate-y-2 scale-0 opacity-0"
            : "me-2 size-5"
        }`}
      >
        <span
          className={`pointer-events-none absolute -inset-1 size-7 animate-ping rounded-full bg-softyellow-300 transition-opacity ${
            props.HandRaised ? "opacity-75" : "opacity-0"
          }`}
        />
        <IconHandStop className="size-5" />
      </div>
      <div
        className={`my-2 grid place-content-center transition-all ${
          props.micOn
            ? "me-0 size-0 translate-y-2 scale-0 opacity-0"
            : "me-2 size-5"
        }`}
      >
        <IconMicrophoneOff className="size-5" />
      </div>

      <div
        className={`my-2 grid place-content-center transition-all ${
          !props.connQuality || props.connQuality === ConnectionQuality.Unknown
            ? "me-0 size-0 translate-y-2 scale-0 opacity-0"
            : "me-2 size-5"
        }`}
      >
        {props.connQuality === ConnectionQuality.Excellent ? (
          <IconAntennaBars5 className="size-7" color="green" />
        ) : props.connQuality === ConnectionQuality.Good ? (
          <IconAntennaBars4 className="size-7" color="green" />
        ) : props.connQuality === ConnectionQuality.Poor ? (
          <IconAntennaBars2 className="size-7" color="orange" />
        ) : props.connQuality === ConnectionQuality.Lost ? (
          <IconAntennaBarsOff className="size-7" color="red" />
        ) : null}
      </div>
    </div>
  );
};
