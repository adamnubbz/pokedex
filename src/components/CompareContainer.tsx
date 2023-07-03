import React from "react";
import Wrapper from "../sections/Wrapper";
import { useAppSelector } from "../app/hooks";
import {
  pokemonStatType,
  pokemonTypeInterface,
  userPokemonsType,
} from "../utils/Types";
import { FaPlus } from "react-icons/fa";

function CompareContainer({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsType;
  isEmpty?: boolean;
}) {
  const createStatsArray = (
    types: pokemonTypeInterface[],
    statType: pokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypeInterface) => {
      console.log("bada bing");
      const key = Object.keys(type)[0];
      console.log({ key });
    });
  };

  const getStats = () => {
    const data = createStatsArray(pokemon?.types!, "strength");
    return <></>;
  };

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
      {pokemon && (
        <div className="compare-element">
          <div className="compare-info">
            <div className="compare-details">
              <h3>{pokemon?.name}</h3>
              <img
                src={pokemon?.image}
                alt="pokemon"
                className="compare-image"
              />

              <div className="pokemon-types-container">
                <div className="pokemon-types">
                  <h4 className="pokemon-type-title">Type</h4>
                  <div className="pokemon-type-icons">
                    {pokemon?.types.map((type: pokemonTypeInterface) => {
                      const keys = Object.keys(type);
                      return (
                        <div className="pokemon-type">
                          <img
                            src={type[keys[0]].image}
                            alt="pokemon type"
                            className="pokemon-type-image"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                {/* {getStats()} */}
              </div>
            </div>
            <div className="compare-action-buttons">
              <button className="compare-btn">Add</button>
              <button className="compare-btn">View</button>
              <button className="compare-btn">Remove</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CompareContainer;
