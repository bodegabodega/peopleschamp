"use client"
import { useState } from 'react';

type Props = {
  block: ImageWithMagnification
}

export default function ImageWithMagnificationComponent({ block }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <img
        src={block.smallImageUrl}
        alt=""
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      />
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={() => setOpen(false)}
        >
          <img
            src={block.largeImageUrl}
            alt=""
            className="max-w-full max-h-full"
          />
        </div>
      )}
    </div>
  );
}
