import React, { useCallback, useState } from "react";
import Presentation from "./screens/presentation";
import Projection from "./screens/projection";
import { Validator } from '@hyperion-framework/validator';
import { Vault } from '@hyperion-framework/vault';

interface Props {
    screen: string;
}

const Yith: React.FC<Props> = () => {

    validateManifest('https://iiif.stack.rdc.library.northwestern.edu/public/87/9d/c5/5a/-3/14/e-/4a/08/-9/1b/2-/78/c9/98/ef/c6/5c-manifest.json?manifest=https://iiif.stack.rdc.library.northwestern.edu/public/87/9d/c5/5a/-3/14/e-/4a/08/-9/1b/2-/78/c9/98/ef/c6/5c-manifest.json');

    return (
        <>
            <Presentation manifest={{}} />
            <Projection  manifest={{}} />
        </>
    );
};

const validateManifest = ( uri: string ) => {
    const vault = new Vault();
    const validator = new Validator();
    vault.loadManifest(uri).then(manifest => {
        return validator.validateManifest(manifest);
    }).catch(error => {
        console.log(`Manifest failed to load: ${error}`);
    });
};

export {
    validateManifest
};

export default Yith;