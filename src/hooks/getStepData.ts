import { AnnotationNormalized } from "@hyperion-framework/types";
import { useYithState } from "context/yith-context";
import {
  getAnnotationNote,
  getCanvasNote,
  getManifestNote,
} from "hooks/getNote";

export const getStepData = (step: any) => {
  const state: any = useYithState();
  const { vault } = state;

  let data: any = {
    currentWindows: [],
    region: [],
    note: {},
  };

  switch (step.type) {
    case "Manifest":
      data.currentWindows = [{ manifestId: step.id }];
      data.note.manifest = getManifestNote(step.id);
      data.note.canvas = getCanvasNote(data.note.manifest.items[0].id);
      break;
    case "Canvas":
      data.currentWindows = [
        { manifestId: step.manifestId, canvasId: step.id },
      ];
      data.note.manifest = getManifestNote(step.manifestId);
      data.note.canvas = getCanvasNote(step.id);
      break;
    case "Annotation":
      const manifest: any = vault.fromRef({
        id: step.manifestId,
        type: "Manifest",
      });
      const annotation: any = vault
        .allFromRef(manifest.annotations[0].items)
        .filter((item: AnnotationNormalized) => {
          if (item.id === step.id) return item;
        })[0];

      const target: string[] = annotation.target.split("#xywh=");

      data.region = target[1].split(",");

      data.currentWindows = [
        { manifestId: step.manifestId, canvasId: target[0] },
      ];

      data.note.manifest = getManifestNote(step.manifestId);
      data.note.canvas = getCanvasNote(target[0]);
      data.note.annotation = getAnnotationNote(annotation);

      break;
    default:
      console.error(
        `Step ${step.type} is unknown. Must be of type Manifest, Canvas, or Annotation.`
      );
  }
  return data;
};
