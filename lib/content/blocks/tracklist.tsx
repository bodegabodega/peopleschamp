import { JSX } from "react";

type TracklistProps = {
  block: Tracklist
}

export default function TracklistComponent(props: TracklistProps): JSX.Element {
  return (
    <ol className="divide-y divide-gray-200 dark:divide-[#343434] bg-transparent text-sm">
      {props.block.tracks.map((track, index) => (
        <li
          key={index}
          className="
            flex items-center justify-between
            px-3 py-1.5
            transition-colors duration-150
            hover:bg-gray-50 dark:hover:bg-black
          "
        >
          <div className="flex items-center gap-2 min-w-0">
            {/* Track number */}
            <span className="w-3 text-xs text-gray-400 dark:text-gray-500 tabular-nums">
              {index + 1}.
            </span>

            {/* Title */}
            <span className="truncate text-gray-800 dark:text-gray-200">
              {track}
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}