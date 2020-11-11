import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Select from "../UI/Select";
import Input from "../UI/Input";
import BedroomForm from "./BedroomForm";
import ImageUploader from "../UI/ImageUploader";
import { IPropertyFormState } from "./types";
import { TextField } from "@material-ui/core";

interface PropertyFormProps {
  form: IPropertyFormState
  setForm: React.Dispatch<React.SetStateAction<IPropertyFormState>>
}

export default function PropertyForm({ form, setForm}: PropertyFormProps) {
  const [bedroomsOpen, setBedroomsOpen] = React.useState(false);

  const handlePropertyChange = (name: string, value: any) => setForm({ ...form, data: {...form.data, [name]: value }  });
  const handleLocationChange = (name: string, value: any) => setForm({ ...form, data: {...form.data, address: {...form.data.address, [name]: value} }})
  const handleFileChange = (file: File) => setForm({ ...form, data: {...form.data, image: file}  })

  const onOpen = () => setBedroomsOpen(true)
  const onClose = () => setBedroomsOpen(false);



  return (
    <TableRow>
      {
        bedroomsOpen && <BedroomForm 
        open={bedroomsOpen} 
        onClose={onClose} 
        onSubmit={bedrooms => handlePropertyChange("bedrooms", bedrooms)}
        bedroomCount={form.data.bedroomCount} />
      }
      <TableCell />
      <TableCell align="center">
        <ImageUploader onUpload={handleFileChange} />
      </TableCell>
      <TableCell align="center">
        <Select
          name="type"
          data={["Maison", "Appartement", "Chambre"]}
          currentValue={form.data.type}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="size"
          variant="standard"
          type="number"
          value={form.data.size}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="sizeLivingRoom"
          variant="standard"
          type="number"
          value={form.data.sizeLivingRoom}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="sizeKitchen"
          variant="standard"
          type="number"
          value={form.data.sizeKitchen}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <TextField 
          name="bedroomSize"
          variant="standard"
          value={form.data.bedrooms.length > 0 ? form.data.bedrooms.reduce((accumulator, currentValue) => accumulator+ currentValue) : 0}
          onClick={onOpen}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="bedroomCount"
          variant="standard"
          type="number"
          value={form.data.bedroomCount}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="floorNumber"
          variant="standard"
          type="number"
          value={form.data.floorNumber}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="price"
          variant="standard"
          type="number"
          value={form.data.price}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="charges"
          variant="standard"
          type="number"
          value={form.data.charges}
          onChange={handlePropertyChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="street"
          variant="standard"
          value={form.data.address.street}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="zipcode"
          variant="standard"
          value={form.data.address.zipcode}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="city"
          variant="standard"
          value={form.data.address.city}
          onChange={handleLocationChange}
        />
      </TableCell>
      <TableCell align="center">
        <Input
          name="country"
          variant="standard"
          value={form.data.address.country}
          onChange={handleLocationChange}
        />
      </TableCell>
    </TableRow>
  );
}