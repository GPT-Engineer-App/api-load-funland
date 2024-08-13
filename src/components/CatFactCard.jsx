import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CatFactCard = ({ fact, isLoading, isError }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cat Fact of the Day</CardTitle>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-4 w-full" />
        ) : isError ? (
          <p className="text-red-500">Failed to load cat fact. Please try again later.</p>
        ) : (
          <p className="text-gray-700">{fact}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default CatFactCard;