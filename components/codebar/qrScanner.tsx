"use client";

import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";
import { useEffect, useRef, useState } from "react";

export default function ScanPage() {
  const qrRegionId = "qr-reader";
  const html5QrCodeRef = useRef<Html5Qrcode | null>(null);
  const [qrData, setQrData] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [cameraStarted, setCameraStarted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (html5QrCodeRef.current || qrData) return;

    const html5QrCode = new Html5Qrcode(qrRegionId);
    html5QrCodeRef.current = html5QrCode;

    Html5Qrcode.getCameras()
      .then((devices) => {
        if (devices.length === 0) throw new Error("No cameras found");

        const backCam = devices.find((d) =>
          d.label.toLowerCase().includes("back")
        );
        const cameraId = backCam?.id || devices[0].id;

        html5QrCode
          .start(
            cameraId,
            {
              fps: 10,
              qrbox: { width: 250, height: 250 }, // Square scan area
            },
            (decodedText) => {
              try {
                const parsed = JSON.parse(decodedText);
                setQrData(parsed);
              } catch {
                setQrData({ raw: decodedText }); // wrap non-JSON content
              }

              html5QrCode.stop().catch(console.warn);
            },
            () => {} // ignore scan errors
          )
          .then(() => setCameraStarted(true))
          .catch((err) => setError("Camera start error: " + err.message));
      })
      .catch((err) => setError("Camera access error: " + err.message));

    return () => {
      if (
        html5QrCodeRef.current &&
        html5QrCodeRef.current.getState() === Html5QrcodeScannerState.SCANNING
      ) {
        html5QrCodeRef.current.stop().catch(console.warn);
      }
    };
  }, [qrData]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5EBE0] px-4 py-8">
      {!qrData ? (
        <>
          <h1 className="text-2xl font-bold text-[#5D4037] mb-4">
            Scan QR Code
          </h1>
          <div
            id={qrRegionId}
            className="w-[250px] h-[250px] rounded-lg border border-[#D2B48C] shadow-md bg-white"
          />
          {!cameraStarted && (
            <p className="text-[#8B4513] mt-4 text-sm">
              Initializing camera...
            </p>
          )}
          {error && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}
        </>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md">
          <h2 className="text-xl font-bold text-[#5D4037] mb-4">
            QR Code Content
          </h2>
          <pre className="text-left text-[#5D4037] text-sm bg-[#F5EBE0] p-3 rounded max-h-60 overflow-auto whitespace-pre-wrap">
            {JSON.stringify(qrData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
