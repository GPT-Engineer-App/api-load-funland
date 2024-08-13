import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import CatFactCard from '../components/CatFactCard';
import CatGallery from '../components/CatGallery';

const fetchCatFact = async () => {
  const response = await fetch('https://catfact.ninja/fact');
  if (!response.ok) {
    throw new Error('Failed to fetch cat fact');
  }
  return response.json();
};

const Index = () => {
  const { data: catFact, isLoading, isError } = useQuery({
    queryKey: ['catFact'],
    queryFn: fetchCatFact,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Fascinating World of Cats</h1>
      
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle>About Cats</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">
              Cats are fascinating creatures that have been domesticated for thousands of years. 
              Known for their independence, agility, and playful nature, cats have become one of 
              the most popular pets worldwide. They come in various breeds, each with unique 
              characteristics and personalities.
            </p>
          </CardContent>
        </Card>

        <CatGallery />
        
        <CatFactCard fact={catFact?.fact} isLoading={isLoading} isError={isError} />
      </div>
    </div>
  );
};

export default Index;