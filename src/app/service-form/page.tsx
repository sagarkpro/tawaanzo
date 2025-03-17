'use client'

import { useState, ChangeEvent, FormEvent } from "react";

interface ServiceDetails {
  name: string;
  descriptions: string[];
  features: string[];
  price: number;
}

interface Service {
  id: string;
  name: string;
  heading: string;
  subHeading: string;
  cta: string;
  types: ServiceDetails[];
}

export default function ServiceForm() {
  const [service, setService] = useState<Service>({
    id: "",
    name: "",
    heading: "",
    subHeading: "",
    cta: "",
    types: [],
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setService((prev) => ({ ...prev, [name]: value }));
  };

  const handleTypeChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedTypes = [...service.types];
    updatedTypes[index] = { ...updatedTypes[index], [name]: name === "price" ? Number(value) : value };
    setService((prev) => ({ ...prev, types: updatedTypes }));
  };

  const handleArrayChange = (typeIndex: number, key: keyof ServiceDetails, index: number, value: string) => {
    const updatedTypes = [...service.types];
    //@ts-expect-error some
    updatedTypes[typeIndex] = { ...updatedTypes[typeIndex], [key]: [...updatedTypes[typeIndex][key]] };
    //@ts-expect-error some
    updatedTypes[typeIndex][key][index] = value;
    setService((prev) => ({ ...prev, types: updatedTypes }));
  };

  const addType = () => {
    setService((prev) => ({
      ...prev,
      types: [...prev.types, { name: "", descriptions: [""], features: [""], price: 0 }],
    }));
  };

  const removeType = (index: number) => {
    setService((prev) => ({
      ...prev,
      types: prev.types.filter((_, i) => i !== index),
    }));
  };

  const addArrayItem = (typeIndex: number, key: keyof ServiceDetails) => {
    const updatedTypes = [...service.types];
    updatedTypes[typeIndex] = { ...updatedTypes[typeIndex], [key]: [...updatedTypes[typeIndex][key], ""] };
    setService((prev) => ({ ...prev, types: updatedTypes }));
  };

  const removeArrayItem = (typeIndex: number, key: keyof ServiceDetails, index: number) => {
    const updatedTypes = [...service.types];
    //@ts-expect-error some
    updatedTypes[typeIndex] = { ...updatedTypes[typeIndex], [key]: updatedTypes[typeIndex][key].filter((_, i) => i !== index) };
    setService((prev) => ({ ...prev, types: updatedTypes }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(service);
    window.navigator.clipboard.writeText(JSON.stringify(service));
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-md shadow-md text-black">
      <h2 className="text-xl font-bold mb-4">Service Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="id" placeholder="ID" value={service.id} onChange={handleChange} className={inputClass} />
        <input type="text" name="name" placeholder="Name" value={service.name} onChange={handleChange} className={inputClass} />
        <input type="text" name="heading" placeholder="Heading" value={service.heading} onChange={handleChange} className={inputClass} />
        <input type="text" name="subHeading" placeholder="SubHeading" value={service.subHeading} onChange={handleChange} className={inputClass} />
        <input type="text" name="cta" placeholder="CTA" value={service.cta} onChange={handleChange} className={inputClass} />

        <h3 className="text-lg font-semibold">Service Types</h3>
        {service.types.map((type, typeIndex) => (
          <div key={typeIndex} className="border p-4 rounded-md bg-white shadow-sm">
            <input type="text" name="name" placeholder="Type Name" value={type.name} onChange={(e) => handleTypeChange(typeIndex, e)} className={inputClass} />
            <h4 className="font-medium">Descriptions</h4>
            {type.descriptions.map((desc, index) => (
              <div key={index} className="flex gap-2 my-2">
                <input type="text" value={desc} onChange={(e) => handleArrayChange(typeIndex, "descriptions", index, e.target.value)} className={inputClass} />
                <button type="button" onClick={() => removeArrayItem(typeIndex, "descriptions", index)} className={`${btnClass}`}>-</button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem(typeIndex, "descriptions")} className={`${btnClass}`}>Add Description</button>

            <h4 className="font-medium">Features</h4>
            {type.features.map((feature, index) => (
              <div key={index} className="flex gap-2 my-2">
                <input type="text" value={feature} onChange={(e) => handleArrayChange(typeIndex, "features", index, e.target.value)} className={inputClass} />
                <button type="button" onClick={() => removeArrayItem(typeIndex, "features", index)} className={`${btnClass}`}>-</button>
              </div>
            ))}
            <button type="button" onClick={() => addArrayItem(typeIndex, "features")} className={`${btnClass}`}>Add Feature</button>
            <br />
            <span>Price:</span>
            <input type="number" name="price" placeholder="Price" value={type.price} onChange={(e) => handleTypeChange(typeIndex, e)} className={inputClass} />
            <button type="button" onClick={() => removeType(typeIndex)} className={`${btnClass} bg-red-500`}>Remove Type</button>
          </div>
        ))}
        <button type="button" onClick={addType} className={`${btnClass} bg-blue-500`}>Add Type</button>

        <button type="submit" className={`${btnClass} bg-green-500`}>Submit</button>
      </form>
    </div>
  );
}

// Tailwind utility classes for inputs and buttons
const inputClass = "w-full p-2 border border-gray-300 rounded-md";
const btnClass = "p-2 text-white rounded-md m-2 bg-primary";
