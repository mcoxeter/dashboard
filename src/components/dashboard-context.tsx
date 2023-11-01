import * as React from 'react';

export interface IWidget {
  id: string;
  name: string;
  args: object;
}

export interface IWidgetSize {
  height: string;
  width: string;
}

export interface IDashboardContext {
  getLayout: () => IWidget[];
  setLayout: (widgets: IWidget[]) => void;
  registerWidger: (name: string, size: IWidgetSize) => void;
  getWidgetSize: (name: string) => IWidgetSize | undefined;
  getCurrentDragging: () => string;
  setCurrentDragging: (name: string) => void;
}
export const DashboardContext = React.createContext<
  IDashboardContext | undefined
>(undefined);

export interface DashboardProviderProps {
  children: React.ReactElement;
}
export function DashboardProvider({
  children
}: DashboardProviderProps): React.ReactElement {
  const [sizes, setSizes] = React.useState(new Map<string, IWidgetSize>());
  const [dragging, setDragging] = React.useState('');
  const [layout, setLayout] = React.useState<IWidget[]>([
    {
      id: '0',
      args: {},
      name: 'ClockWidget'
    }
  ]);
  return (
    <DashboardContext.Provider
      value={{
        getLayout: () => layout,
        setLayout,
        getWidgetSize: (name) => sizes.get(name),
        registerWidger: (name, size) => {
          sizes.set(name, size);
          setSizes(sizes);
        },
        getCurrentDragging: () => dragging,
        setCurrentDragging: setDragging
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
