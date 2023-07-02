import React from "react";
import Wrapper from "../sections/Wrapper";
import { useAppSelector } from "../app/hooks";
import { userPokemonsType } from "../utils/Types";
import { FaPlus } from "react-icons/fa";

function CompareContainer({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) {
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3>Add Pokemon to Compare</h3>
        </div>
      )}
    </div>
  );
}

export default CompareContainer;
