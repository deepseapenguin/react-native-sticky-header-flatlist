import React from 'react'
import { FlatList, FlatListProps, ListRenderItem } from 'react-native'

interface StickyHeaderFlatlistProps extends FlatListProps<any> {
  renderHeader: ListRenderItem<any>,
  renderItem: ListRenderItem<any>,
  childrenKey?: string,
}

export default (props: StickyHeaderFlatlistProps) => {

  let data : any = [];
  const indict : number[] = [];

  for (const i in props.data) {
    const row = props.data[i]
    indict.push(data.length)
    data.push({...row, isStickyFlatListHeader: true})    
    data = data.concat(row[props.childrenKey || "children"])
  }
  
  return <FlatList
    {...props}
    stickyHeaderIndices={indict}
    renderItem={(data) => 
      data?.item?.isStickyFlatListHeader !== undefined && data?.item?.isStickyFlatListHeader !== null && data.item.isStickyFlatListHeader? 
      props.renderHeader(data):
      props.renderItem(data)
    }
    data={data}
  />
}