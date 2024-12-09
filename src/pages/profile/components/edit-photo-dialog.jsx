import { useState, useRef } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { RotateCw, Move, ExternalLink } from 'lucide-react';

export default function EditPhotoDialog({ open, onOpenChange }) {
    const [image, setImage] = useState(null);
    const [zoom, setZoom] = useState(1);
    const [rotation, setRotation] = useState(0);
    const fileInputRef = useRef(null);

    const handleChangeImage = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target?.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleZoom = (value) => {
        setZoom(value[0]);
    };

    const handleRotate = () => {
        setRotation((prev) => prev + 90);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[800px] p-5">
                <DialogHeader className="p-2">
                    <DialogTitle className="text-3xl font-medium">
                        Edit photo
                    </DialogTitle>
                </DialogHeader>
                <div className="p-6">
                    <div className="flex flex-col lg:flex-row gap-10">
                        <div className="flex-1 flex flex-col items-center">
                            <div className="relative rounded-full border border-neutral-200 w-[300px] h-[300px] overflow-hidden flex items-center justify-center">
                                {image ? (
                                    <img
                                        src={image}
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                        style={{
                                            transform: `scale(${zoom}) rotate(${rotation}deg)`,
                                            transition: 'transform 0.2s',
                                        }}
                                    />
                                ) : (
                                    <div className="text-center space-y-4">
                                        <p className="text-muted-foreground">
                                            No image selected
                                        </p>
                                        <Button
                                            variant="link"
                                            onClick={handleChangeImage}
                                        >
                                            Select Image
                                        </Button>
                                    </div>
                                )}
                            </div>

                            {image && (
                                <div className="py-10 w-full max-w-md flex justify-between items-center">
                                    <div className="flex items-center gap-4 w-full">
                                        <Move className="h-5 w-5 text-muted-foreground" />
                                        <Slider
                                            value={[zoom]}
                                            min={0.5}
                                            max={2}
                                            step={0.1}
                                            onValueChange={handleZoom}
                                            className="flex-1"
                                        />
                                    </div>
                                    <div className="w-max">
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="gap-2 text-primary hover:text-primary/90"
                                            onClick={handleRotate}
                                        >
                                            <RotateCw className="h-4 w-4" />
                                            Rotate
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>

                        {image && (
                            <div className="lg:w-full space-y-8">
                                <div className="space-y-4">
                                    <p className="text-2xl font-medium">
                                        Show clients the best version of
                                        yourself!
                                    </p>
                                    <div className="flex justify-between items-center">
                                        {[120, 96, 64, 48].map((size) => (
                                            <div
                                                key={size}
                                                className="relative overflow-hidden rounded-full border border-neutral-200"
                                                style={{
                                                    width: `${size}px`,
                                                    height: `${size}px`,
                                                }}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${size}x${size} preview`}
                                                    className="w-full h-full object-cover"
                                                    style={{
                                                        transform: `rotate(${rotation}deg)`,
                                                    }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-0">
                                    <p className="text-lg text-muted-foreground">
                                        Must be an actual photo of you.
                                    </p>
                                    <p className="text-lg text-muted-foreground">
                                        Logos, clip-art, group photos, and
                                        digitally-altered images are not
                                        allowed.{' '}
                                        <a
                                            className="hover:underline text-primary flex items-center gap-2"
                                            href="#"
                                        >
                                            Learn More{' '}
                                            <ExternalLink className="size-5" />
                                        </a>
                                    </p>
                                </div>

                                <div className="flex justify-end gap-5">
                                    <Button
                                        variant="ghost"
                                        className="text-primary hover:text-primary/90"
                                        onClick={handleChangeImage}
                                    >
                                        Change image
                                    </Button>
                                    <Button
                                        onClick={() => onOpenChange(false)}
                                        className="rounded-xl"
                                    >
                                        Save photo
                                    </Button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </DialogContent>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/png,image/jpeg,image/jpg"
                className="hidden"
            />
        </Dialog>
    );
}