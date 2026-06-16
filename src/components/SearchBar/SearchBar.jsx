import './SearchBar.css'

function SearchBar({ value, onChange, placeholder = 'Rechercher' }) {
  return (
    <label className="search-bar">
      <span className="search-bar__label">Recherche</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </label>
  )
}

export default SearchBar

