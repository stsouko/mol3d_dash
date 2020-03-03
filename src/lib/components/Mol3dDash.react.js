import React, {Component} from 'react';
import PropTypes from 'prop-types';


export default class Mol3dDash extends Component {
    constructor(props) {
        super(props);
        this.viewer_div = React.createRef();
    }

    componentDidMount() {
        this.viewer_obj = $3Dmol.createViewer(this.viewer_div.current.id);
        this.colors = $3Dmol.elementColors;
        this.build_scene();
    }

    componentDidUpdate() {
        this.viewer_obj.clear();
        this.build_scene();
    }

    build_scene(){
        const {value} = this.props;
        const defaultRadius = 0.1;

        for (let i = 0; i < value.atoms.length; i++) {
            this.viewer_obj.addSphere(
                {center: {x: value.atoms[i].x, y: value.atoms[i].y, z: value.atoms[i].z},
                radius: 0.3,
                color: this.colors.rasmol[value.atoms[i].elem]})
        }
        for (let i = 0; i < value.bonds.length; i++) {
            const p1 = value.atoms[value.bonds[i].atom1];
            const p2 = value.atoms[value.bonds[i].atom2];
            const middle = {x:(p1.x+p2.x)/2,y:(p1.y+p2.y)/2,z:(p1.z+p2.z)/2};


            if (value.bonds[i].maxorder == 1) {
                this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                    end:{x:middle.x,y:middle.y,z:middle.z},
                    radius:defaultRadius,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom1].elem]});
                this.viewer_obj.addCylinder({start:{x:middle.x,y:middle.y,z:middle.z},
                    end:{x:p2.x,y:p2.y,z:p2.z},
                    radius:defaultRadius,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom2].elem]});
                if (value.bonds[i].from == 0) {
                    this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                        end:{x:p2.x,y:p2.y,z:p2.z},
                        radius:defaultRadius+0.1*defaultRadius,
                        color:42803});
                };
                if (value.bonds[i].to == 0) {
                    this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                        end:{x:p2.x,y:p2.y,z:p2.z},
                        radius:defaultRadius+0.1*defaultRadius,
                        color:"#F0612F"});
                };
            }
            if (value.bonds[i].maxorder == 2) {
                const r = defaultRadius/2.5;
                this.viewer_obj.addCylinder({start:{x:p1.x-r,y:p1.y-r,z:p1.z-r},
                    end:{x:middle.x-r,y:middle.y-r,z:middle.z-r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom1].elem]});
                this.viewer_obj.addCylinder({start:{x:middle.x+r,y:middle.y+r,z:middle.z+r},
                    end:{x:p2.x+r,y:p2.y+r,z:p2.z+r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom2].elem]});
                this.viewer_obj.addCylinder({start:{x:p1.x+r,y:p1.y+r,z:p1.z+r},
                    end:{x:middle.x+r,y:middle.y+r,z:middle.z+r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom1].elem]});
                this.viewer_obj.addCylinder({start:{x:middle.x-r,y:middle.y-r,z:middle.z-r},
                    end:{x:p2.x-r,y:p2.y-r,z:p2.z-r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom2].elem]});
                if (value.bonds[i].from == 0) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-r,y:p1.y-r,z:p1.z-r},
                        end:{x:p2.x-r,y:p2.y-r,z:p2.z-r},
                        radius:r+0.1*r,
                        color:42803});
                    this.viewer_obj.addCylinder({start:{x:p1.x+r,y:p1.y+r,z:p1.z+r},
                        end:{x:p2.x+r,y:p2.y+r,z:p2.z+r},
                        radius:r+0.1*r,
                        color:42803});
                };
                if (value.bonds[i].to == 0) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-r,y:p1.y-r,z:p1.z-r},
                        end:{x:p2.x-r,y:p2.y-r,z:p2.z-r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                    this.viewer_obj.addCylinder({start:{x:p1.x+r,y:p1.y+r,z:p1.z+r},
                        end:{x:p2.x+r,y:p2.y+r,z:p2.z+r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                };
                if (value.bonds[i].from == 1) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-r,y:p1.y-r,z:p1.z-r},
                        end:{x:p2.x-r,y:p2.y-r,z:p2.z-r},
                        radius:r+0.1*r,
                        color:42803});
                };
                if (value.bonds[i].to == 1) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-r,y:p1.y-r,z:p1.z-r},
                        end:{x:p2.x-r,y:p2.y-r,z:p2.z-r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                };
            }
            if (value.bonds[i].maxorder == 3) {
                const r = defaultRadius/4;
                this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                    end:{x:middle.x-2*r,y:middle.y-2*r,z:middle.z-2*r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom1].elem]});
                this.viewer_obj.addCylinder({start:{x:middle.x+2*r,y:middle.y+2*r,z:middle.z+2*r},
                    end:{x:p2.x+2*r,y:p2.y+2*r,z:p2.z+2*r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom2].elem]});
                this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                    end:{x:middle.x,y:middle.y,z:middle.z},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom1].elem]});
                this.viewer_obj.addCylinder({start:{x:middle.x,y:middle.y,z:middle.z},
                    end:{x:p2.x,y:p2.y,z:p2.z},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom2].elem]});
                this.viewer_obj.addCylinder({start:{x:p1.x+2*r,y:p1.y+2*r,z:p1.z+2*r},
                    end:{x:middle.x+2*r,y:middle.y+2*r,z:middle.z+2*r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom1].elem]});
                this.viewer_obj.addCylinder({start:{x:middle.x-2*r,y:middle.y-2*r,z:middle.z-2*r},
                    end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                    radius:r,
                    color:this.colors.rasmol[value.atoms[value.bonds[i].atom2].elem]});
                if (value.bonds[i].from == 0) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                        end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                        radius:r+0.1*r,
                        color:42803});
                    this.viewer_obj.addCylinder({start:{x:p1.x+2*r,y:p1.y+2*r,z:p1.z+2*r},
                        end:{x:p2.x+2*r,y:p2.y+2*r,z:p2.z+2*r},
                        radius:r+0.1*r,
                        color:42803});
                    this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                        end:{x:p2.x,y:p2.y,z:p2.z},
                        radius:r+0.1*r,
                        color:42803});
                };
                if (value.bonds[i].to == 0) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                        end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                    this.viewer_obj.addCylinder({start:{x:p1.x+2*r,y:p1.y+2*r,z:p1.z+2*r},
                        end:{x:p2.x+2*r,y:p2.y+2*r,z:p2.z+2*r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                    this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                        end:{x:p2.x,y:p2.y,z:p2.z},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                };
                if (value.bonds[i].from == 2) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                        end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                        radius:r+0.1*r,
                        color:42803});
                };
                if (value.bonds[i].to == 2) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                        end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                };
                if (value.bonds[i].from == 1) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                        end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                        radius:r+0.1*r,
                        color:42803});
                    this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                        end:{x:p2.x,y:p2.y,z:p2.z},
                        radius:r+0.1*r,
                        color:42803});
                };
                if (value.bonds[i].to == 1) {
                    this.viewer_obj.addCylinder({start:{x:p1.x-2*r,y:p1.y-2*r,z:p1.z-2*r},
                        end:{x:p2.x-2*r,y:p2.y-2*r,z:p2.z-2*r},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                    this.viewer_obj.addCylinder({start:{x:p1.x,y:p1.y,z:p1.z},
                        end:{x:p2.x,y:p2.y,z:p2.z},
                        radius:r+0.1*r,
                        color:"#F0612F"});
                }
            }
        }

        this.viewer_obj.render();
        this.viewer_obj.zoomTo();
    }

    render() {
        const {id} = this.props;
        const st = {height: '100%', width: '100%', position: 'relative'};
        return (
            <div id={id} style={st} className='viewer_3Dmoljs' ref={this.viewer_div}/>
        );
    }
}

Mol3dDash.defaultProps = {
    value: {atoms: [], bonds: []}
};

Mol3dDash.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The value displayed in the input.
     */
    value: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};
