import {
  RoomAudioRenderer,
  TrackReferenceOrPlaceholder,
  useConnectionQualityIndicator,
  useConnectionState,
  useLocalParticipant,
  useParticipantAttributes,
  useParticipants,
  useRoomContext,
  useTracks,
  VideoTrack,
} from "@livekit/components-react";
import { ConnectionState, Track } from "livekit-client";

import { IconScreenShareOff, IconShareplay } from "@tabler/icons-react";
import { cubicBezier, HTMLMotionProps, motion } from "framer-motion";
import { useAtom } from "jotai";
import m from "lang";
import { useEffect, useMemo, useState } from "react";
import { useDivSize } from "~/hooks/useWindowSize";
import {
  camDeviceAtom,
  meetGridLayoutAtom,
  micDeviceAtom,
  outDeviceAtom,
  rasieHandAtom,
  scrShareStateAtom,
} from "~/store/store";
import { strToHueColor } from "~/utils/color";
import {
  decideHorizontalGridLayout,
  decideVerticalGridLayout,
} from "~/utils/layout";
import { ParticipantName } from "./participantName";

const MotionTrack = (
  props: {
    track: TrackReferenceOrPlaceholder;
  } & React.HTMLAttributes<HTMLDivElement> &
    HTMLMotionProps<"div">,
) => {
  const partAttr = useParticipantAttributes({
    participant: props.track.participant,
  });
  const conn = useConnectionQualityIndicator({
    participant: props.track.participant,
  });

  const [, setScrShareState] = useAtom(scrShareStateAtom);
  const [forceSHowMyScreen, setForceSHowMyScreen] = useState(false);

  const { initials, hue } = useMemo(() => {
    const words = (props.track.participant.name || "").trim().split(/\s+/);
    const initials =
      words.length > 1
        ? words
            .filter((_w, index, arr) => index === 0 || index === arr.length - 1)
            .map((word) => word.charAt(0).toUpperCase())
        : (words.at(0) || "  ").slice(0, 2).toUpperCase().split("");

    return {
      initials,
      hue: strToHueColor(props.track.participant.name || ""),
    };
  }, [props.track.participant.name]);

  return (
    <motion.div
      id={`${
        props.track?.participant.isLocal ? "me" : props.track.participant.sid
      }-${props.track.source}`}
      layoutId={`${
        props.track.participant.isLocal ? "me" : props.track.participant.sid
      }-${props.track.source}`}
      {...{ ...props, track: undefined }}
      className={`relative size-full min-h-0 min-w-0 overflow-hidden rounded-xl lg:rounded-3xl ${
        partAttr.attributes?.handRaise === "true"
          ? "ring-4 ring-softyellow-200"
          : ""
      } ${props.className}`}
      transition={{ ease: cubicBezier(0, 1, 0.65, 0.95) }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {props.track.publication?.videoTrack &&
      !props.track.publication?.videoTrack?.isMuted ? (
        <>
          <VideoTrack
            trackRef={props.track}
            className={`z-10 size-full min-h-0 min-w-0 bg-black ${
              props.track.source === Track.Source.ScreenShare
                ? "object-contain"
                : "object-cover"
            } ${
              props.track.participant.isLocal &&
              props.track.publication?.source === Track.Source.Camera
                ? "-scale-x-100"
                : ""
            }`}
          />
          {props.track.participant.isLocal &&
            props.track.publication?.source === Track.Source.ScreenShare &&
            !forceSHowMyScreen && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 p-4 text-center text-white backdrop-blur">
                <span className="mb-4 w-full max-w-sm text-xl">
                  {m.shareScreenTitle()}
                </span>
                <span className="mb-6 w-full max-w-sm text-sm opacity-75">
                  {m.shareScreenDesc()}
                </span>
                <div className="flex gap-4">
                  <button
                    className="flex flex-nowrap items-center justify-center gap-2 rounded-full bg-softred-500/50 px-4 py-3 text-softblue-200"
                    onClick={() => setScrShareState(null)}
                  >
                    <IconScreenShareOff />
                    <span>{m.stopScreenShare()}</span>
                  </button>
                  <button
                    className="flex flex-nowrap items-center justify-center gap-2 rounded-full bg-white/20 px-4 py-3 text-white/80"
                    onClick={() => setForceSHowMyScreen(true)}
                  >
                    <IconShareplay />
                    <span>{m.showShareContent()}</span>
                  </button>
                </div>
              </div>
            )}
        </>
      ) : (
        <>
          <div
            className="absolute size-full"
            style={{
              backgroundColor:
                props.track.source === Track.Source.ScreenShare
                  ? `black`
                  : `hsla(${hue}, 70%, 20%, 0.07)`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-20 grid place-content-center">
            <div className="absolute inset-0 grid place-content-center">
              <span
                className={`pointer-events-none inline-flex size-[4.5rem] animate-ping rounded-full transition-opacity ${
                  props.track.participant.isSpeaking
                    ? "opacity-75"
                    : "opacity-0"
                }`}
                style={{
                  backgroundColor: `hsl(${hue}, 90%, 60%)`,
                }}
              />
            </div>
            <div
              className="z-10 grid size-24 place-content-center rounded-full"
              style={{
                backgroundColor: `hsla(${hue}, 50%, 80%, 1)`,
              }}
            >
              <span
                className="flex flex-row pt-3 text-2xl"
                style={{ color: `hsla(${hue}, 50%, 30%, 1)` }}
              >
                {initials.map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </span>
            </div>
          </div>
        </>
      )}
      <ParticipantName
        name={props.track.participant.name || ""}
        isSpreaking={props.track.participant.isSpeaking}
        micOn={props.track.participant.isMicrophoneEnabled}
        HandRaised={partAttr.attributes?.handRaise === "true"}
        connQuality={conn.quality}
      />
    </motion.div>
  );
};

enum TrackType {
  ScreenShare = 4,
  Camera = 3,
  Mic = 2,
  Placeholder = 1,
}

interface TrackLayoutProps {
  id: string;
  type: TrackType;
  lastSpokeAt: number;
  isSpeaking: boolean;
  isPinned?: boolean;
  score: number;
}

const maskImage = `radial-gradient(circle at 50% 50% ,black 20%, transparent)`;

export function MeetLayout() {
  const room = useRoomContext();

  const connState = useConnectionState();

  const [micDevice] = useAtom(micDeviceAtom);
  const [camDevice] = useAtom(camDeviceAtom);
  const [outDevice] = useAtom(outDeviceAtom);
  const [scrShareState, setScrShareState] = useAtom(scrShareStateAtom);
  const [raiseHandState] = useAtom(rasieHandAtom);

  useEffect(() => {
    room.switchActiveDevice("audioinput", micDevice.deviceId || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [micDevice.deviceId]);

  useEffect(() => {
    room.localParticipant.setMicrophoneEnabled(micDevice.isOn, {
      deviceId: micDevice.deviceId,
      echoCancellation: true,
      noiseSuppression: true,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [micDevice.isOn]);

  useEffect(() => {
    room.switchActiveDevice("videoinput", camDevice.deviceId || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camDevice.deviceId]);

  useEffect(() => {
    room.localParticipant.setCameraEnabled(
      camDevice.isOn,
      camDevice.isOn
        ? {
            deviceId: camDevice.deviceId,
            facingMode: camDevice.facingMode,
          }
        : undefined,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camDevice.isOn, camDevice.facingMode]);

  useEffect(() => {
    room.switchActiveDevice("audiooutput", outDevice.deviceId || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outDevice]);

  useEffect(() => {
    if (scrShareState === "requested")
      room.localParticipant.setScreenShareEnabled(true);
    if (!scrShareState) room.localParticipant.setScreenShareEnabled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrShareState]);

  const lp = useLocalParticipant();
  useEffect(() => {
    setScrShareState(lp.isScreenShareEnabled ? "sharing" : null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lp.isScreenShareEnabled]);

  useEffect(() => {
    room.localParticipant.setAttributes({ handRaise: `${raiseHandState}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [raiseHandState]);

  const videoTracks = useTracks([
    Track.Source.Camera,
    Track.Source.ScreenShare,
  ]);
  const participants = useParticipants();

  const [tracks, trackListWithProps]: [
    TrackReferenceOrPlaceholder[],
    TrackLayoutProps[],
  ] = useMemo(() => {
    const trackList: TrackReferenceOrPlaceholder[] = [
      ...videoTracks,
      ...participants.flatMap((p) =>
        p.videoTrackPublications.size
          ? []
          : [
              {
                participant: p,
                source: Track.Source.Camera,
              },
            ],
      ),
    ];
    return [
      trackList,
      trackList.map((v) => ({
        id: `${v.participant.sid}-${v.source}`,
        type:
          v.source === Track.Source.ScreenShare
            ? TrackType.ScreenShare
            : v.source === Track.Source.Camera
              ? TrackType.Camera
              : v.participant.isMicrophoneEnabled
                ? TrackType.Mic
                : TrackType.Placeholder,
        lastSpokeAt:
          Math.round((v.participant.lastSpokeAt?.getTime() || 0) / 10000) * 10,
        isSpeaking: v.participant.isSpeaking,
        score:
          0 +
          (v.source === Track.Source.ScreenShare
            ? 50
            : v.publication?.source === Track.Source.Camera
              ? 10
              : 0),
      })),
    ];
  }, [participants, videoTracks]);

  const [wWidth, , wDir] = useDivSize();

  const layout = useMemo(() => {
    const sortedTracks = trackListWithProps.toSorted((a, b) =>
      b.score - a.score === 0 && trackListWithProps.length > 2
        ? b.lastSpokeAt - a.lastSpokeAt
        : b.score - a.score,
    );
    const [pinnedCount, camCount, placeholderCount] = sortedTracks.reduce<
      [number, number, number]
    >(
      (prev, curr) => [
        (prev[0] +=
          curr.isPinned ||
          (curr.type === TrackType.ScreenShare && curr.isPinned !== false)
            ? 1
            : 0),
        (prev[1] +=
          (curr.type === TrackType.ScreenShare && curr.isPinned === false) ||
          curr.type === TrackType.Camera
            ? 1
            : 0),
        (prev[2] +=
          [TrackType.Placeholder, TrackType.Mic].includes(curr.type) &&
          curr.isPinned !== true
            ? 1
            : 0),
      ],
      [0, 0, 0],
    );

    const unpinnedCount = camCount * 2 + placeholderCount;

    const pinnedSide = !pinnedCount
      ? 0
      : wDir === "v"
        ? 1
        : unpinnedCount > 16
          ? 2
          : 1;

    const cs = 36 + (wDir === "h" ? 4 * pinnedSide : 0);
    const rs = 24 + (wDir === "v" ? 6 * pinnedSide : 0);

    const l = Math.min(
      wWidth < 900 ? 10 : Infinity,
      pinnedCount || trackListWithProps.length,
    );
    const decidedMainLayout =
      wDir === "h"
        ? decideHorizontalGridLayout(l)
        : decideVerticalGridLayout(l);

    const rowCount = decidedMainLayout.length;
    let posIndex = -1;
    let sideSpaceUsed = 0;

    type TracksPosType = {
      [k: string]: { gridRow: string; gridColumn: string } | undefined;
    };

    const tracksPos = {
      ...decidedMainLayout.reduce<TracksPosType>(
        (prev, colCount, rowIndex) => ({
          ...prev,
          ...Array.from({ length: colCount }).reduce<TracksPosType>(
            (prev, _, colIndex) => ({
              ...prev,
              [sortedTracks[(posIndex += 1)].id]: {
                gridRow:
                  wDir === "h"
                    ? rowCount === 1
                      ? "1 / 25"
                      : rowCount === 2
                        ? rowIndex === 0
                          ? "1 / 15"
                          : "15 / 25"
                        : rowCount === 3
                          ? rowIndex === 0
                            ? "1 / 13"
                            : rowIndex === 1
                              ? "13 / 20"
                              : "20 / 25"
                          : ""
                    : rowCount === 1
                      ? "1 / 25"
                      : rowCount === 2
                        ? rowIndex === 0
                          ? "1 / 13"
                          : "13 / 25"
                        : rowCount === 3
                          ? rowIndex === 0
                            ? "1 / 12"
                            : rowIndex === 1
                              ? "12 / 19"
                              : "19 / 25"
                          : rowCount === 4
                            ? rowIndex === 0
                              ? "1 / 11"
                              : rowIndex === 1
                                ? "11 / 17"
                                : rowIndex === 1
                                  ? "17 / 21"
                                  : "21 / 25"
                            : "",
                gridColumn: `${(colIndex * 36) / colCount + 1} / ${
                  ((colIndex + 1) * 36) / colCount + 1
                }`,
              },
            }),
            {},
          ),
        }),
        {},
      ),
      ...Array.from({
        length: pinnedCount ? sortedTracks.length - pinnedCount : 0,
      }).reduce<TracksPosType>((prev, _, i) => {
        const track = sortedTracks[(posIndex += 1)];
        sideSpaceUsed += [TrackType.Placeholder, TrackType.Mic].includes(
          track.type,
        )
          ? 1
          : 2;
        const isSideSpaceFull =
          wDir === "v" ? i > 1 : sideSpaceUsed > pinnedSide * 16 - 1;
        return {
          ...prev,
          [track.id]: isSideSpaceFull
            ? undefined
            : {
                gridRow:
                  wDir === "v"
                    ? `span 6 / span 6`
                    : [TrackType.Placeholder, TrackType.Mic].includes(
                          track.type,
                        )
                      ? `span 2 / span 2`
                      : `span 4 / span 4`,
                gridColumn:
                  wDir === "h" ? `span 4 / span 4` : `span 12 / span 12`,
              },
        };
      }, {}),
    };

    return {
      cs,
      rs,
      tracksPos,
    };
  }, [wDir, wWidth, trackListWithProps]);

  const [, setMeetGridLayout] = useAtom(meetGridLayoutAtom);
  useEffect(() => {
    setMeetGridLayout({ cs: layout.cs, rs: layout.rs });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [layout.cs, layout.rs]);

  useEffect(() => {
    if (connState === ConnectionState.Connected && tracks.length === 1) {
      (window as any).inviteBtn?.current?.click();
    }
  }, [connState, tracks.length]);

  return (
    <>
      <div
        className={`absolute inset-0 flex place-content-center gap-2 bg-white/50 p-4 backdrop-blur-3xl transition-opacity ${
          [
            ConnectionState.Reconnecting,
            ConnectionState.SignalReconnecting,
          ].includes(connState)
            ? "z-40 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        style={{ maskImage, WebkitMaskImage: maskImage }}
      >
        <img
          className="size-8 place-self-end self-center"
          src="/img/loader.svg"
          alt=""
        />
        <span className="cursor-default self-center whitespace-pre-wrap">
          {m.reconnecting()}
        </span>
      </div>

      {tracks
        .toSorted((a, b) => (a.participant.sid < b.participant.sid ? 1 : -1))
        .map((track) => {
          return (
            <MotionTrack
              key={`${track.participant.sid}-${track.source}`}
              track={track}
              style={{
                ...(layout.tracksPos[
                  `${track.participant.sid}-${track.source}`
                ] || {
                  gridRow:
                    wDir === "h"
                      ? `${layout.rs - 1} / ${layout.rs + 1}`
                      : `${layout.rs - 5} / ${layout.rs + 1}`,
                  gridColumn:
                    wDir === "h"
                      ? `${layout.cs - 3} / ${layout.cs + 1}`
                      : `${layout.cs - 11} / ${layout.cs + 1}`,
                }),
              }}
            />
          );
        })}
      <RoomAudioRenderer />
    </>
  );
}
