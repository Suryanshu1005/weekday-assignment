const useFilterHandlers = (onFilterChange) => {
  const handleRoleChange = (selectedOption) => {
    onFilterChange("roles", selectedOption?.value);
  };

  const handleExpChange = (selectedOption) => {
    onFilterChange("exp", selectedOption ? selectedOption.value : null);
  };

  const handleMinBasePayChange = (selectedOption) => {
    onFilterChange("basePay", selectedOption ? selectedOption.value : null);
  };

  const handleSearchChange = (event) => {
    const {value} = event.target;
    onFilterChange("search", value);
  };

  return {
    handleRoleChange,
    handleExpChange,
    handleMinBasePayChange,
    handleSearchChange,
  };
};

export default useFilterHandlers;
