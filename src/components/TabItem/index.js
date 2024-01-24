import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const isClicked = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassname = isActive ? 'active-button' : ''
  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={'button ${activeTabClassname}'}
        onClick={isClicked}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
