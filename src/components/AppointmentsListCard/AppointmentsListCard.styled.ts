import styled from "styled-components";

export const DateDisplay = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 20px;
  padding: 15px;
  min-width: 90px;
`;

export const Time = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 20px;
  padding: 15px;
  min-width: 150px;
`;

export const Price = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 20px;
  padding: 15px;
  min-width: 140px;
`;

export const Name = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 20px;
  padding: 15px;
  min-width: 180px;
`;

export const PriceAccent = styled.span`
  color: ${({ theme }) => theme.colors.accentColor};
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 15px;
`;

export const Status = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.accentColor};
  border-radius: 20px;
  padding: 15px;
  min-width: 150px;
`;

export const StatusAccent = styled.span<{ $status: string }>`
  color: ${({ $status }) => {
    switch ($status) {
      case "scheduled":
        return "#8A2BE2";
      case "сompleted":
        return "#006400";
      default:
        return "#FFA500";
    }
  }};
`;
