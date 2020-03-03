import mol3d_dash
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

mol = {'atoms': [{'elem': 'C', 'x': 0.851189341787, 'y': 0.615738898577, 'z': 0.112083911898}, {'elem': 'N', 'x': -1.280729937502, 'y': -2.127396829158, 'z': -0.156242370431}, {'elem': 'O', 'x': 1.888275023397, 'y': 0.340515412141, 'z': 0.661084229805}, {'elem': 'N', 'x': 0.782348015705, 'y': 0.583408097208, 'z': -1.388458246056}, {'elem': 'H', 'x': 1.233212650149, 'y': 1.425012487042, 'z': -1.766139755752}, {'elem': 'H', 'x': 1.314740364057, 'y': -0.216500117686, 'z': -1.742777051385}, {'elem': 'H', 'x': -0.495463770589, 'y': 0.616114026416, 'z': -1.646819354127}, {'elem': 'H', 'x': -0.938569696643, 'y': -1.744325110934, 'z': 0.726863165646}, {'elem': 'O', 'x': -0.267200215526, 'y': 0.945213391686, 'z': 0.634937794648}, {'elem': 'H', 'x': -1.660165563641, 'y': -1.334930423579, 'z': -0.681183830598}, {'elem': 'H', 'x': -2.08219777597, 'y': 1.509873873803, 'z': -1.67697267996}, {'elem': 'O', 'x': -1.652311096915, 'y': 0.729118368714, 'z': -1.293982935916}, {'elem': 'H', 'x': -1.139383808394, 'y': 0.945557683791, 'z': -0.207375448493}, {'elem': 'H', 'x': -0.458472114506, 'y': -2.455442478032, 'z': -0.666325424211}], 'bonds': [{'atom1': 0, 'atom2': 1, 'maxorder': 1, 'to': 0}, {'atom1': 0, 'atom2': 2, 'maxorder': 2}, {'atom1': 0, 'atom2': 8, 'maxorder': 2, 'from': 1}, {'atom1': 1, 'atom2': 5, 'maxorder': 1}, {'atom1': 1, 'atom2': 7, 'maxorder': 1}, {'atom1': 1, 'atom2': 13, 'maxorder': 1, 'from': 0}, {'atom1': 3, 'atom2': 4, 'maxorder': 1}, {'atom1': 3, 'atom2': 6, 'maxorder': 1}, {'atom1': 3, 'atom2': 10, 'maxorder': 1}, {'atom1': 8, 'atom2': 9, 'maxorder': 1, 'to': 0}, {'atom1': 9, 'atom2': 11, 'maxorder': 1, 'from': 0}, {'atom1': 11, 'atom2': 12, 'maxorder': 1}, {'atom1': 11, 'atom2': 13, 'maxorder': 1, 'to': 0}]}

app = dash.Dash(__name__, external_scripts=[{'src': 'https://cdnjs.cloudflare.com/ajax/libs/3Dmol/1.4.0/3Dmol-min.js'}])

app.layout = html.Div([
    mol3d_dash.Mol3dDash(id='input', value=mol)
], style={'width': 800, 'height': 600})


if __name__ == '__main__':
    app.run_server(debug=True)
