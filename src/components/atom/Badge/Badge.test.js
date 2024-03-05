/* eslint-disable no-undef */
import { render } from '@testing-library/react';
import Badge from './Badge';

describe('Badge component', () => {
  test('renders with default type', () => {
    const { getByText, getByTestId } = render(
      <Badge>Hello</Badge>
    );

    const badgeElement = getByTestId('badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge');
    expect(badgeElement).not.toHaveClass('badge--plan');
    expect(getByText('Hello')).toBeInTheDocument();
  });

  test('renders with custom type', () => {
    const { getByText, getByTestId } = render(
      <Badge type="PLAN">World</Badge>
    );

    const badgeElement = getByTestId('badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('badge');
    expect(badgeElement).toHaveClass('badge--plan');
    expect(getByText('World')).toBeInTheDocument();
  });
});
