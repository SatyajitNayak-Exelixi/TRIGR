export const TGDropdown = ({ items = [], onChange=()=>{} }) => {
  const renderOptions = items?.map((item, id) => {
    return <option key={id} value={item}>{item}</option>;
  });

  return (
    <>
      <select onChange={onChange}  className="tg-dropdown" name="methods" id="methods">
        {renderOptions}
      </select>
    </>
  );
};
