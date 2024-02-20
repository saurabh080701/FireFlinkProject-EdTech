import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = () => {
  return (
    <div>
        <div className="search">
            <h1 className='helpCenter'>Help Center</h1>
            <div className="search-container">
              <span>
                <SearchOutlinedIcon  />
              </span>
              <input type="text" placeholder="Search..."></input>
            </div>
          </div>
    </div>
  )
}

export default SearchBar
