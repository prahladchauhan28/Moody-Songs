import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";

const FaceMoodDetector = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [mood, setMood] = useState("Detecting...");

  useEffect(() => {
    const startVideo = () => {
      navigator.mediaDevices
        .getUserMedia({ video: {} })
        .then((stream) => {
          videoRef.current.srcObject = stream;
        })
        .catch((err) => console.error("Camera error:", err));
    };

    const loadModels = async () => {
      const MODEL_URL = "/models";
      await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
      await faceapi.nets.faceLandmark68Net.loadFromUri(MODEL_URL);
      await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
      startVideo();
    };

    loadModels();

    videoRef.current &&
      videoRef.current.addEventListener("loadedmetadata", () => {
        const video = videoRef.current;

        const displaySize = {
          width: video.videoWidth,
          height: video.videoHeight,
        };


        faceapi.matchDimensions(canvas, displaySize);

        setInterval(async () => {
          const detections = await faceapi
            .detectAllFaces(video, new faceapi.TinyFaceDetectorOptions())
            .withFaceExpressions();

          const resizedDetections = faceapi.resizeResults(
            detections,
            displaySize
          );

          const ctx = canvas.getContext("2d");
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          faceapi.draw.drawDetections(canvas, resizedDetections);

          if (resizedDetections.length > 0) {
            const { expressions } = resizedDetections[0];

            const topExpression = Object.entries(expressions).sort(
              (a, b) => b[1] - a[1]
            )[0][0]; // highest probability

            // Mood mapping logic
            const moodMapping = {
              happy: "😊 Positive",
              surprised: "😲 Positive",
              sad: "😔 Negative",
              angry: "😠 Negative",
              disgusted: "🤢 Disgusted",
              fearful: "😨 Anxious",
              neutral: "😐 Neutral",
            };

            setMood(moodMapping[topExpression] || "Unknown");
          } else {
            setMood("No face detected");
          }
        }, 300);
      });
  }, []);

  return (
    <div >
      <h1 >Current Mood: {mood}</h1>
      <div>
        <video ref={videoRef} autoPlay muted  />
      </div>
    </div>
  );
};



export default FaceMoodDetector;
