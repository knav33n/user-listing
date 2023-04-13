import styled from "styled-components";
import { Card } from "antd";

export const StyledCard = styled(Card)`
  margin: 15px;
  .ant-card-cover {
    background: rgb(245, 245, 245);
    margin: 0 auto;
    text-align: center;
  }
  .ant-card-body {
    h3 {
      color: rgba(0, 0, 0, 0.85);
    }
    div {
      display: flex;
      color: rgba(0, 0, 0, 0.65);
      p {
        margin-left: 10px;
        margin-bottom: 5px;
        font-size: 15px;
      }
    }
  }
  .ant-card-actions {
    background: #fafafa;
  }
`;

export const CoverContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;
