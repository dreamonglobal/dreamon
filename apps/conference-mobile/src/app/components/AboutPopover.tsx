import React from "react";
import { IonList, IonItem, IonLabel } from "@ionic/react";

interface AboutPopoverProps {
  dismiss: () => void;
}

const AboutPopover: React.FC<AboutPopoverProps> = ({ dismiss }) => {
  const close = (url: string) => {
    window.open(url, "_blank");
    dismiss();
  };

  return (
    <IonList>
      <IonItem button onClick={() => close("https://dreamon.world")}>
        <IonLabel>Who Is Dream On</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close("https://conference.dreamon.world")}>
        <IonLabel>Dream On: Conference</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close("https://dreamon.world/missions")}>
        <IonLabel>Dream On: Missions</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close("https://dreamon.world/music")}>
        <IonLabel>Dream On: Music Collective</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close("https://dreamon.world/speakers")}>
        <IonLabel>Dream On: Speaker Collective</IonLabel>
      </IonItem>
      <IonItem button onClick={() => close("https://anchor.fm/dreamonmoms")}>
        <IonLabel>DO: Moms Podcast</IonLabel>
      </IonItem>
    </IonList>
  );
};

export default AboutPopover;
