import { useAtom } from "jotai";
import { Panel } from "konsta/react";
import { mainPanelAtom } from "~/store/store";
import MainPanelContent from "./MainPanelContent";

export interface MainPanelProps {
  className?: string;
}

const MainPanel = ({ className }: MainPanelProps) => {
  const [mainPanel, setMainPanel] = useAtom(mainPanelAtom);
  console.log({ className });

  return (
    <Panel
      side={"left"}
      opened={mainPanel}
      onBackdropClick={() => setMainPanel(false)}
      className="flex flex-col bg-white/70 backdrop-blur-md dark:bg-black/70 lg:hidden"
    >
      <MainPanelContent />
    </Panel>
  );
};

export default MainPanel;
