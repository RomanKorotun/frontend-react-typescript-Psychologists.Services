import styled from "styled-components";

export const HeaderSection = styled.header`
  @media screen and (min-width: 740px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
  }
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #f3f3f3;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dee2df;
`;

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  @media only screen and (min-width: 740px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
