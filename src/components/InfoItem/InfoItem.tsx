import React, { FC } from "react";

import "./InfoItem.scss";

type InfoItemProps = {
  itemKey: string;
  value: string;
};

const InfoItem: FC<InfoItemProps> = ({ itemKey, value }) => {
  return (
    <div className="info-item-container">
      <p className="item-key">{itemKey}</p>
      <p className="item-value">{value}</p>
    </div>
  );
};

export default InfoItem;
