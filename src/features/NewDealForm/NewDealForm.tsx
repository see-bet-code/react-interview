import React, { useState } from "react";
import noop from "lodash/noop";
import { DealType, ErrorType } from "../../types";
import "./NewDealForm.scss";

const DEFAULT_DEAL: DealType = {
  institution: "",
  dealType: "",
  dealSize: "",
  isPublished: false,
};

const DEFAULT_ERRORS: ErrorType = {
  institution: "",
  dealType: "",
  dealSize: "",
};

type DealFormProps = {
  onCreateDeal: (deal: DealType) => any;
};

const DealForm = (props: DealFormProps) => {
  const { onCreateDeal = noop } = props;
  const [newDeal, setNewDeal] = useState(DEFAULT_DEAL);
  const [errors, setErrors] = useState(DEFAULT_ERRORS);
  const [validDeal, setValidDeal] = useState(false)

  const handleUpdateProperty = (property: string) => (
    e: React.ChangeEvent<any>
  ) => {
    setNewDeal({ ...newDeal, [property]: e.target.value });
    if (e.target.value === "") {
      setErrors({ ...errors, [property]: "Field is required for valid submission" })
      setValidDeal(false)
    } else {
      if (property === "dealSize") {
        if (isNaN(parseFloat(e.target.value))) {
          setErrors({ ...errors, [property]: "Deal Size must be a number" })
        }
        else {
          setErrors({ ...errors, [property]: "" })
        }
      }
      if (newDeal.institution !== "" && newDeal.dealType !== "" && newDeal.dealSize !== "") {
        setErrors({ ...errors, [property]: "" })
      } else {
        setValidDeal(true)
      }
    }
  };

  const handleCreateDeal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onCreateDeal({ ...newDeal });
    // Reset state for the next deal input.
    setNewDeal({ ...DEFAULT_DEAL });
  };

  return (
    <form className='NewDealForm tile'>
      <div className='tile--header'>Add New Deal</div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Institution</label>
        <input
          className='NewDealForm--input'
          value={newDeal.institution}
          placeholder='LS Credit Union'
          onChange={handleUpdateProperty("institution")}
          required
        />
        <span className="required" >{errors.institution}</span>
      </div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Deal Type</label>
        <input
          className='NewDealForm--input'
          value={newDeal.dealType}
          placeholder='Consumer Auto'
          onChange={handleUpdateProperty("dealType")}
          required
        />
        <span className="required" >{errors.dealType}</span>
      </div>
      <div className='NewDealForm--div'>
        <label className='NewDealForm--label'>Deal Size</label>
        <input
          className='NewDealForm--input'
          value={newDeal.dealSize}
          placeholder='$1,000,000'
          onChange={handleUpdateProperty("dealSize")}
          required
        />
        <span className="required" >{errors.dealSize}</span>
      </div>
      <button className='NewDealForm--button' onClick={handleCreateDeal} disabled={!validDeal}>
        Create Deal
      </button>
    </form>
  );
};

export default DealForm;
