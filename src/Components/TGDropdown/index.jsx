export const TGDropdown = ({ items = [] }) => {
  const renderOptions = items?.map((item, id) => {
    return <option value={item}>{item}</option>;
  });

  return (
    <>
      <select className="tg-dropdown" name="methods" id="methods">
        {renderOptions}
      </select>
    </>
  );
};
