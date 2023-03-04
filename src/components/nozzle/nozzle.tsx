import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import React, { PropsWithChildren } from "react";
import { useNozzleModel } from "../../hooks/nozzle";

interface Props {}

export const NozzleView: React.FunctionComponent<PropsWithChildren<Props>> =
  kosComponent(function NozzleView() {
    const { status, KosModelLoader } = useNozzleModel();

    return (
      <KosModelLoader {...status} loading={<LoadingMessage></LoadingMessage>}>
        <div>CONTENT GOES HERE</div>
      </KosModelLoader>
    );
  });
