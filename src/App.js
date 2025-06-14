import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    padding: 2rem 0;
  }
`;

export const BoxBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.img`
  width: 88px;
  height: 63px;
  margin-bottom: 30px;
`;

export const ImgCapa = styled.img`
  width: 100%;
  max-width: 12rem;
  max-height: 17rem;

  @media (min-width: 600px) and (max-width: 1024px) {
    max-width: 15rem;
  }
`;

export const ImgButton = styled.img`
  width: 32px;
  height: 26px;
  margin-right: 20px;
  border: none;
`;

export const FilmName = styled.h4`
  color: #fffcf9;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 20px;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

export const Descrition = styled.p`
  color: #fffcf9;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  width: 423px;
  height: 275px;

  @media (max-width: 500px) {
    width: 300px;
    font-size: 1.2rem;
  }
`;

export const Boxall = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Boxdescrition = styled.div`
  margin-left: 20px;

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
  }
`;

export const H1 = styled.h1`
  color: #fffcf9;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 30px;

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 4rem;
  }
`;

export const Button = styled.button`
  width: 181px;
  height: 47px;
  background-color: #fff;
  color: #000;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  border-radius: 0.4rem;

  @media (max-width: 500px) {
    width: 180px;
    height: 47px;
  }

  @media (min-width: 600px) and (max-width: 1024px) {
    width: 200px;
    height: 50px;
  }
`;

export const P = styled.p`
  color: #fffcf9;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  @media (min-width: 600px) and (max-width: 1024px) {
    font-size: 1.2rem;
  }
  @media (max-width: 500px) {
    font-size: 1rem;
    font-style: normal;
    width: 25rem;
    /* margin-bottom: 20px; */
  }
`;
