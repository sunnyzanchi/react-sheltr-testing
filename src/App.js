import React, { useState } from 'react'
import { SharedElement } from '@taito/react-sheltr'

const items = [
  { image: 'https://loremflickr.com/400/400/dog?lock=1', name: 'Item 1' },
  { image: 'https://loremflickr.com/400/400/dog?lock=2', name: 'Item 2' },
  { image: 'https://loremflickr.com/400/400/dog?lock=3', name: 'Item 3' },
  { image: 'https://loremflickr.com/400/400/dog?lock=4', name: 'Item 4' },
  { image: 'https://loremflickr.com/400/400/dog?lock=5', name: 'Item 5' },
  { image: 'https://loremflickr.com/400/400/dog?lock=6', name: 'Item 6' },
  { image: 'https://loremflickr.com/400/400/dog?lock=7', name: 'Item 7' },
  { image: 'https://loremflickr.com/400/400/dog?lock=8', name: 'Item 8' },
  { image: 'https://loremflickr.com/400/400/dog?lock=9', name: 'Item 9' },
  { image: 'https://loremflickr.com/400/400/dog?lock=10', name: 'Item 10' }
]

const ItemView = ({ onBack, item }) => (
  <SharedElement sharedId={item.name} startOnUnmount>
    {({ ...sheltrProps }) => (
      <section>
        <p onClick={onBack}>Back</p>
        <img {...sheltrProps} src={item.image} />
        <p>{item.name}</p>
      </section>
    )}
  </SharedElement>
)

const ListView = ({ items, onSelect }) => (
  <ul>
    {items.map(item => (
      <SharedElement sharedId={item.name}>
        {({ onClick: sheltrClick, ...sheltrProps }) => (
          <li
            key={item.name}
            onClick={() => {
              sheltrClick()
              onSelect(item)
            }}
          >
            <img {...sheltrProps} src={item.image} />
            <p>{item.name}</p>
          </li>
        )}
      </SharedElement>
    ))}
  </ul>
)

const App = () => {
  // Currently selected item
  const [selected, select] = useState(null)

  if (selected == null) return <ListView items={items} onSelect={select} />

  return <ItemView item={selected} onBack={() => select(null)} />
}

export default App
