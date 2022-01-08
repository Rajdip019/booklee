import React from "react";
import { ChakraProvider, Skeleton, SkeletonText } from "@chakra-ui/react";

const CardSkeleton = () => {
  return (
    <div>
      <ChakraProvider>
        <Skeleton height="300px" width="266px" rounded="10px" />
        <div className="my-3">
          <SkeletonText width="266px" />
        </div>
      </ChakraProvider>
    </div>
  );
};

export default CardSkeleton;
