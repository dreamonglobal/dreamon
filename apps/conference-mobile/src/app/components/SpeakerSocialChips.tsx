import { Speaker } from '@dreamon/conference-speakers'
import { IonChip, IonIcon, IonLabel } from '@ionic/react'
import { logoFacebook, logoInstagram } from 'ionicons/icons'

type SpeakerSocialChipsDetailProps = { speaker: Speaker }
const SpeakerSocialChips: React.FC<SpeakerSocialChipsDetailProps> = ({
  speaker,
}) => {
  function openExternalUrl(url: string) {
    window.open(url, '_blank')
  }

  return (
    <>
      <IonChip
        color="facebook"
        onClick={() =>
          openExternalUrl(`https://facebook.com/${speaker.facebook}`)
        }
      >
        <IonIcon icon={logoFacebook}></IonIcon>
        <IonLabel>Facebook</IonLabel>
      </IonChip>

      <IonChip
        color="instagram"
        onClick={() =>
          openExternalUrl(`https://instagram.com/${speaker.instagram}`)
        }
      >
        <IonIcon icon={logoInstagram}></IonIcon>
        <IonLabel>Instagram</IonLabel>
      </IonChip>
    </>
  )
}
export default SpeakerSocialChips
