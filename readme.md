# react-native-sticky-header-flatlist
 A simple React Native component to display categorical data in flatlist with sticky header
## Installation
`yarn add react-native-sticky-header-flatlist` or `npm install react-native-sticky-header-flatlist`

Import it into your component/ screen
```javascript
import StickyHeaderFlatlist from 'react-native-sticky-header-flatlist';
```
## Usage
### Working Example: 
```javascript
import React from 'react';
import { Text } from 'react-native';
import StickyHeaderFlatlist from 'react-native-sticky-header-flatlist';

const DATA =
  [
    {
      title: "Family",
      contactList: [
        { title: "Armani Snider" },
        { title: "Macauly Downs" },
        //... More name
      ]
    },
    {
      title: "Company",
      contactList: [
        { title: "Armani Snider" },
        { title: "Macauly Downs" },
        //... More name
      ]
    },
    {
      title: "Club",
      contactList: [
        { title: "Armani Snider" },
        { title: "Macauly Downs" },
        //... More name
      ]
    },

  ]


const App = () => {
  return (
    <StickyHeaderFlatlist
      keyExtractor={(_, i) => i + ""}
      childrendKey={"contactList"}
      renderHeader={({ item }) => {
        return <Text style={{
          padding: 20,
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: '#eee',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>{item.title}</Text>
      }}

      renderItem={({ item }) => {
        return <Text style={{
          padding: 30,
          borderWidth: 1,
          borderColor: '#000',
          backgroundColor: '#fff',
        }}>{item.title}</Text>
      }}
      data={DATA}
    />
  );
};

export default App;
```

### Result: 
![alt text](https://i.imgur.com/ikzpNOj.gif)

## API
extended [Flatlist Props](https://reactnative.dev/docs/flatlist#props)
| Property   | Type   | Description   |
|:---:|:---:|:---:|
| `renderHeader` | function | Work like [renderItem in Flatlist ](https://reactnative.dev/docs/flatlist#props), but for render sticky header|
| `renderItem` | function | Work like [renderItem in Flatlist ](https://reactnative.dev/docs/flatlist#props), but for render children in each category|
| `childrenKey` | string | Optional parameter, define the key of the children array in each category, default value is "children" |