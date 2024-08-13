import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CatGallery = () => {
  const catImages = [
    'https://placekitten.com/300/200',
    'https://placekitten.com/301/200',
    'https://placekitten.com/302/200',
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cat Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {catImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Cat ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md transition-transform hover:scale-105"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CatGallery;