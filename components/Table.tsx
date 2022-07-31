import { CheckIcon } from "@heroicons/react/outline";
import React from "react";
import products from "../constants/plans";

interface Props {
  selectedPlan?: number;
}
const Table = ({ selectedPlan }: Props) => {
  return (
    <table>
      <tbody className="divide-y divide-[gray]">
        <tr className="tableRow">
          <td className="tableDataTitle">Monthly Price</td>
          {products.map((product, index) => {
            return (
              <td
                className={`tableDataFeature ${
                  selectedPlan === product.id ? "text-[#e50914]" : "text-[gray]"
                }`}
                key={index}
              >
                {product.price}
              </td>
            );
          })}
        </tr>
        <tr className="tableRow">
          <td className={"tableDataTitle"}>Video quality</td>
          {products.map((product, index) => {
            return (
              <td
                className={`tableDataFeature ${
                  selectedPlan === product.id ? "text-[#e50914]" : "text-[gray]"
                }`}
                key={index}
              >
                {product.VideoQuality}
              </td>
            );
          })}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">Resolution</td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.Resolution}
            </td>
          ))}
        </tr>
        <tr className="tableRow">
          <td className="tableDataTitle">
            Watch on your TV, computer, mobile phone and tablet
          </td>
          {products.map((product) => (
            <td
              className={`tableDataFeature ${
                selectedPlan === product.id
                  ? 'text-[#E50914]'
                  : 'text-[gray]'
              }`}
              key={product.id}
            >
              {product.portability === 'true' && (
                <CheckIcon className="inline-block h-8 w-8" />
              )}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
