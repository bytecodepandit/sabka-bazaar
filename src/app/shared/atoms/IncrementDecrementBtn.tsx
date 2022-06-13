import React from "react";
import styled from "styled-components";
import { BsFillDashCircleFill, BsPlusCircleFill } from "react-icons/bs";
import colors from "app/theme/colors";

interface IncrementDecrementBtnProps {
  onIncrement: (event: any) => void;
  onDecrement: (event: any) => void;
  count: number;
}
const IncrementDecrementBtn: React.FC<IncrementDecrementBtnProps> = ({
  onDecrement,
  onIncrement,
  count,
}) => {
  return (
    <IncrementDecrementBtnContainer>
      <BsFillDashCircleFill
        color={colors.primary}
        size={22}
        onClick={onDecrement}
        className="cursor-pointer"
      />
      <Quantity>{count}</Quantity>
      <BsPlusCircleFill
        color={colors.primary}
        onClick={onIncrement}
        size={22}
        className="cursor-pointer"
      />
    </IncrementDecrementBtnContainer>
  );
};

export default IncrementDecrementBtn;

const IncrementDecrementBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80px;
  justify-content: space-between;
`;

const Quantity = styled.span`
  font-weight: 600px;
`;
