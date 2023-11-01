/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { IWidget } from './dashboard-context';
import { ClockWidget } from './widgets/clock-widget';
export const widgetMap = {
  ClockWidget: ClockWidget
};

export function createWidget(widget: IWidget): React.ReactElement {
  return React.createElement((widgetMap as any)[widget.name], widget.args);
}
