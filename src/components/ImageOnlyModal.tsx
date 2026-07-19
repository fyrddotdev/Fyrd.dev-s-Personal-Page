import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageOnlyModalProps {
  imageUrl: string;
  altText: string;
  isAchievement?: boolean;
}

function getColor(isAchievement: boolean) {
  if (isAchievement) {
    return `text-amber-400 border-amber-900/30 bg-amber-950/20 hover:bg-amber-950/50 hover:border-amber-800`;
  } else {
    return ``;
  }
}

export function ImageOnlyModal({
  imageUrl,
  altText,
  isAchievement = false,
}: ImageOnlyModalProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <button
          className={`mt-3 text-xs font-mono px-3 py-1.5 rounded-md border transition-colors w-fit ${getColor(isAchievement)}`}
        >
          View Image / Certificate
        </button>
      </DialogTrigger>

      {/* Konten Modal: Murni Gambar & Tombol Close Bawaan */}
      <DialogContent className="sm:max-w-175 border-zinc-900 bg-zinc-950 p-2 text-zinc-100 overflow-hidden">
        <div className="relative w-full overflow-hidden rounded-md bg-zinc-900 aspect-4/3 sm:aspect-16/10">
          <img
            src={imageUrl}
            alt={altText}
            loading="lazy"
            className="h-full w-full object-contain object-center"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
