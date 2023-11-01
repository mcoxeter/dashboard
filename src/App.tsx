import './App.css';
import { DashboardProvider } from './components/dashboard-context';
import { DashboardEditing } from './components/dashboard-editing';
import { WidgetSelector } from './components/widget-selector';

function App() {
  return (
    <DashboardProvider>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <WidgetSelector />
        <DashboardEditing />
      </div>
    </DashboardProvider>
  );
}

export default App;
