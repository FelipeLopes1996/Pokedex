import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import { CardPoke } from '.'
import { CardPokeProps } from '../../types/cardTypes'

export default {
  title: 'CardPoke',
  component: CardPoke,
} as Meta<CardPokeProps>

export const Template: Story<CardPokeProps> = args => {
  return (
    <div>
      <CardPoke {...args} />
    </div>
  )
}
