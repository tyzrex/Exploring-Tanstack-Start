import * as React from 'react'
import { Lightbulb, Moon, Sun } from 'lucide-react'
import { useTheme } from '@/modules/shared/components/theme-provider'

export function ThemeToggle() {
  const { toggleMode, themeMode } = useTheme()

  const handleToggleMode = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault()
    e.stopPropagation()
    toggleMode()
  }

  return (
    <div
      onClick={handleToggleMode}
      className={`bg-gray-500/10 dark:bg-gray-500/30 rounded-lg flex items-center justify-between
        hover:bg-gray-500/20 dark:hover:bg-gray-500/40
        cursor-pointer transition-all duration-300 ease-in-out text-xs font-black`}
    >
      <div className="flex-1 flex items-center justify-between p-1.5 gap-1">
        {themeMode === 'light' && <Sun size={16} />}
        {themeMode === 'dark' && <Moon size={16} />}
        {themeMode === 'auto' && (
          <div className="uppercase select-none flex gap-2 items-center opacity-70 text-xs">
            <Lightbulb size={16}/>
            Auto</div>
        )}
      </div>
    </div>
  )
}