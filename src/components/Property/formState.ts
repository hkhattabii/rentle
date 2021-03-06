import { IEntityFormState } from "../../types";
import { IPropertyForm } from "./types";

const initPropertyForm: IEntityFormState<IPropertyForm> = {
  open: false,
  isUpdating: false,
  data: {
    type: "Maison",
    size: 128,
    sizeLivingRoom: 32,
    sizeKitchen: 16,
    floorNumber: 0,
    price: 1400,
    charges: 600,
    address: {
      street: "",
      zipcode: 0,
      city: "",
      country: "",
    },
    image: undefined,
    bedrooms: [],
    bedroomCount: 0,
    occupantID: undefined
  }

}

export default initPropertyForm
