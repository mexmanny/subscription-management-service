import styled from "@emotion/styled";

export const SubscriptionContainer = styled.div`
  margin-top: 0;
  width: 80%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const CurrentSubscriptionStyle = styled.div`
  margin-top:0;
  font-size: 20px;
  background: #f2f2f2;
  padding-bottom:2rem;
  color: black;
  text-align: center;


  h1 {
    margin: 0;
    padding:1rem;
  }
  h2 {
    margin-top: 0;
    margin-bottom:8px;
    background: pink;
    padding:1.5rem;
  }

  h3 {
    margin: 0 10px 10px 10px;
    
    
  }

  h4 {
    color: white;
    background: #e45b73;
    text-align: center;
    margin: 0;
    font-size:3rem;
    width:100%
    height:100%;
   padding:2rem;

   @media screen and (max-width: 600px) {
    font-size:2rem;
    padding:1rem;
  }
  }

  ul{
    margin-bottom:1rem;
    margin-top:2rem;
    margin-left:0;
    padding-left:0;
  }

  li{
    list-style-type:none;
    margin-bottom:0.5rem;
    font-size:1.2rem;
  }

  span.bold {
    font-weight:bold;
  }

  span.amount {
    font-size:5rem;
    font-weight:medium;
  }
`;
