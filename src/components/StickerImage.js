import dino from "../images/sticker.jpg";
import SpaceExplorer from "../sticker_imgs/spaceExplorer.png";
import Happy from "../sticker_imgs/bee.png";
import Galactic from "../sticker_imgs/galactic.png";
import Cool from "../sticker_imgs/cool.png";
import Nature from "../sticker_imgs/nature.png";
import Rainbow from "../sticker_imgs/rainbow.png";
import Dinosaur from "../sticker_imgs/dinosaur.png";
import Sweet from "../sticker_imgs/Sweet.png";
import Underwater from "../sticker_imgs/Underwater.png";
import Cute from "../sticker_imgs/Cute.png";
import Magical from "../sticker_imgs/Magical.png";
import Adventure from "../sticker_imgs/Adventure.png";
import SpaceCats from "../sticker_imgs/SpaceCats.png";
import DinoLand from "../sticker_imgs/DinoLand.png";
import Fruit from "../sticker_imgs/Fruit.png";
import Whimsical from "../sticker_imgs/Whimsical.png";
import Emoji from "../sticker_imgs/Emoji.png";

export const StickerImage = ({ uuid, className }) => {
  const stickerMap = {
    "373f793b-1443-48fc-968c-5742306b387f": Dinosaur,
    "29f4cefb-f875-404a-b742-7eb6389748b8": Sweet,
    "4e42a81c-0f46-4e80-928f-fd51101954dc": Underwater,
    "643c9380-6b22-4cb0-91dd-c757c33d2d87": Cute,
    "c51678fe-6ea2-483f-9465-e42fbb1d7f43": Magical,
    "20edea37-a342-4741-a82c-a34a6d504216": Adventure,
    "986cea75-2558-47d2-81d8-a0d9f35f124c": SpaceCats,
    "127c6f3d-bfca-4f4b-a705-2da512a45bee": DinoLand,
    "b071db9d-0cd2-43cf-ae9d-b58068444a1d": Fruit,
    "51d4fc02-78b8-4642-acb9-ca1df978f4e5": Whimsical,
    "9028a9e5-5088-4e90-96a0-5a2b511ba437": Emoji,
    "36e6f064-444c-4550-a9af-4093456224b7": Rainbow,
    "8092156b-eb1c-4f71-b954-a7394e6d51ff": SpaceExplorer,
    "ad3c076a-aaa9-4de4-9f61-d444819fd183": Galactic,
    "89c7a3ff-ac29-432b-887f-35fd70e7c732": Happy,
    "8737e1a1-a4b2-48c6-a83c-76a1db8d25a1": Cool,
    "a50bf830-7445-4dc6-9a82-ed482362a3d8": Nature,
  };

  return (
    <img
      className={className}
      src={stickerMap[uuid] || dino}
      alt="sticker"
    ></img>
  );
};
