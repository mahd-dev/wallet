import { MutableRefObject, useEffect, useRef, useState } from "react";

const useMicVolume = (
  deviceId?: string,
  micRef?: MutableRefObject<HTMLSpanElement | null>,
) => {
  const [volume, setVolume] = useState(0);
  const audioContext = useRef<AudioContext>();
  const analyser = useRef<AnalyserNode>();
  const dataArray = useRef<Uint8Array>();
  const source = useRef<MediaStreamAudioSourceNode>();
  const rafId = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const initializeAudio = async () => {
      try {
        audioContext.current = new window.AudioContext();
        analyser.current = audioContext.current.createAnalyser();
        analyser.current.fftSize = 256;

        const stream = await navigator.mediaDevices.getUserMedia({
          audio: { deviceId: { exact: deviceId } },
        });

        source.current = audioContext.current.createMediaStreamSource(stream);
        source.current.connect(analyser.current);

        dataArray.current = new Uint8Array(analyser.current.frequencyBinCount);

        // updateVolume();
      } catch (error) {
        console.error("Error initializing audio:", error);
      }
    };

    initializeAudio();

    const updateVolume = () => {
      if (!analyser.current || !dataArray.current) return;
      analyser.current.getByteFrequencyData(dataArray.current);
      const average =
        dataArray.current!.reduce((acc, val) => acc + val, 0) /
        dataArray.current!.length;
      const newVol = parseFloat((average / 255).toFixed(2));

      if (!micRef && newVol !== volume) setVolume(newVol);
      else if (micRef?.current)
        micRef.current.style.transform = `scale(${1 + newVol * 1.5})`;

      // rafId.current = requestAnimationFrame(updateVolume);
    };

    rafId.current = setInterval(updateVolume, 100);

    return () => {
      clearInterval(rafId.current);
      if (source.current) {
        source.current.disconnect();
      }
      if (audioContext.current) {
        audioContext.current.close();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deviceId]);

  return volume;
};

export default useMicVolume;
