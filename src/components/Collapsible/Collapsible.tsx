import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { collapsible as St } from './styles'
import IconF from 'react-native-vector-icons/Feather'
import IconO from 'react-native-vector-icons/Octicons'
import colors from '../../UI/colors'
import Collapsible from 'react-native-collapsible'
import { CollapsiblePanelProps } from '../../utils/models'

const CollapsePanel = ({ title, children }: CollapsiblePanelProps) => {
  const [collapsed, setCollapsed] = useState(true)

  return (
    <View>
      <Pressable
        style={[
          St.pressCollapsable,
          {
            backgroundColor: !collapsed ? colors.primary : colors.white,
            borderBottomWidth: collapsed ? 1 : 0,
          },
        ]}
        onPress={() => setCollapsed(!collapsed)}
      >
        <View style={[St.pressCollapsableHeader, { paddingHorizontal: !collapsed ? 10 : 0 }]}>
          <Text
            style={[
              St.pressCollapsableHeaderText,
              {
                color: !collapsed ? colors.white : colors.secondary,
              },
            ]}
          >
            {title}
          </Text>
          {collapsed ? (
            <IconF name="plus" size={20} color={colors.secondary} />
          ) : (
            <IconO
              name="horizontal-rule"
              size={15}
              color={!collapsed ? colors.white : colors.secondary}
            />
          )}
        </View>
      </Pressable>
      <Collapsible collapsed={collapsed} style={St.collapsible}>
        <View style={St.collapsibleContent}>{children}</View>
      </Collapsible>
    </View>
  )
}

export default CollapsePanel
