import React from 'react';
import { TextField, MenuItem, Button } from '@mui/material';

const Filters = ({ filters, onChange }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div>
      <TextField
        select
        label="Company"
        name="company"
        value={filters.company}
        onChange={handleInputChange}
        margin="normal"
      >
        {['AMZ', 'FLP', 'SNP', 'MYN', 'AZO'].map((company) => (
          <MenuItem key={company} value={company}>
            {company}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        select
        label="Category"
        name="category"
        value={filters.category}
        onChange={handleInputChange}
        margin="normal"
      >
        {['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'Mouse', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC'].map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Min Price"
        name="minPrice"
        type="number"
        value={filters.minPrice}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        label="Max Price"
        name="maxPrice"
        type="number"
        value={filters.maxPrice}
        onChange={handleInputChange}
        margin="normal"
      />
      <TextField
        select
        label="Sort By"
        name="sortBy"
        value={filters.sortBy}
        onChange={handleInputChange}
        margin="normal"
      >
        {['price', 'rating', 'discount'].map((sortOption) => (
          <MenuItem key={sortOption} value={sortOption}>
            {sortOption}
          </MenuItem>
        ))}
      </TextField>

      <Button variant="contained" color="primary" onClick={() => onChange(filters)} style={{ marginTop: '20px' }}>
        Apply Filters
      </Button>
    </div>
  );
};

export default Filters;
